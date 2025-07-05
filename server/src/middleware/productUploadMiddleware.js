// middleware/productUploadMiddleware.js
/**
 * Product Image Upload Middlewares
 * 
 * This file contains middlewares for handling product image uploads to Cloudinary.
 * 
 * USAGE EXAMPLES:
 * 
 * 1. Combined upload (preview + gallery images) - REQUIRED:
 *    router.post('/create', uploadProductImages, createProduct);
 *    - Expects: previewImage (single file) and/or galleryImages (up to 5 files)
 *    - Files are required to be present
 * 
 * 2. Combined upload (preview + gallery images) - OPTIONAL:
 *    router.post('/create', uploadProductImagesOptional, createProduct);
 *    - Expects: previewImage (single file) and/or galleryImages (up to 5 files)
 *    - Files are optional
 * 
 * 3. Preview image only:
 *    router.post('/create', uploadProductPreviewOnly, createProduct);
 *    - Expects: previewImage (single file)
 * 
 * 4. Gallery images only:
 *    router.post('/create', uploadProductGalleryOnly, createProduct);
 *    - Expects: galleryImages (up to 5 files)
 * 
 * The uploaded files will be available in req.uploadedFiles:
 * {
 *   previewImage: { url: "...", public_id: "..." } | null,
 *   galleryImages: [{ url: "...", public_id: "..." }, ...]
 * }
 */

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Create storage for product images
const productStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'product_images',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ width: 800, height: 800, crop: 'limit' }],
  },
});

// Create multer instance for product images
const productUpload = multer({ storage: productStorage });

// Middleware for uploading product preview image
const uploadProductPreview = productUpload.single('previewImage');

// Middleware for uploading product gallery images
const uploadProductGallery = productUpload.array('galleryImages', 5); // max 5 images

// Combined middleware for uploading both preview and gallery images
const uploadProductImages = (req, res, next) => {
  // Use multer's fields to handle multiple file fields
  const upload = productUpload.fields([
    { name: 'previewImage', maxCount: 1 },
    { name: 'galleryImages', maxCount: 5 }
  ]);

  upload(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ 
          success: false,
          error: 'Too many files uploaded. Maximum is 1 preview image and 5 gallery images.' 
        });
      }
      return res.status(400).json({ 
        success: false,
        error: err.message 
      });
    }

    // Process uploaded files
    const previewImage = req.files['previewImage']?.[0];
    const galleryImages = req.files['galleryImages'] || [];

    // Add processed file data to request object
    req.uploadedFiles = {
      previewImage: previewImage ? {
        url: previewImage.path,
        public_id: previewImage.filename
      } : null,
      galleryImages: galleryImages.map(file => ({
        url: file.path,
        public_id: file.filename
      }))
    };

    next();
  });
};

// Individual middlewares for separate uploads
const uploadProductPreviewOnly = (req, res, next) => {
  uploadProductPreview(req, res, (err) => {
    if (err) {
      return res.status(400).json({ 
        success: false,
        error: err.message 
      });
    }

    if (req.file) {
      req.uploadedFiles = {
        previewImage: {
          url: req.file.path,
          public_id: req.file.filename
        }
      };
    }

    next();
  });
};

const uploadProductGalleryOnly = (req, res, next) => {
  uploadProductGallery(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ 
          success: false,
          error: 'Too many files uploaded. Maximum is 5 gallery images.' 
        });
      }
      return res.status(400).json({ 
        success: false,
        error: err.message 
      });
    }

    if (req.files && req.files.length > 0) {
      req.uploadedFiles = {
        galleryImages: req.files.map(file => ({
          url: file.path,
          public_id: file.filename
        }))
      };
    }

    next();
  });
};

// Optional upload middleware - doesn't require files to be present
const uploadProductImagesOptional = (req, res, next) => {
  const upload = productUpload.fields([
    { name: 'previewImage', maxCount: 1 },
    { name: 'galleryImages', maxCount: 5 }
  ]);

  upload(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ 
          success: false,
          error: 'Too many files uploaded. Maximum is 1 preview image and 5 gallery images.' 
        });
      }
      return res.status(400).json({ 
        success: false,
        error: err.message 
      });
    }

    // Process uploaded files (optional)
    const previewImage = req.files?.['previewImage']?.[0];
    const galleryImages = req.files?.['galleryImages'] || [];

    // Add processed file data to request object (even if empty)
    req.uploadedFiles = {
      previewImage: previewImage ? {
        url: previewImage.path,
        public_id: previewImage.filename
      } : null,
      galleryImages: galleryImages.map(file => ({
        url: file.path,
        public_id: file.filename
      }))
    };

    next();
  });
};

module.exports = {
  uploadProductImages,           // Combined upload (preview + gallery) - required
  uploadProductImagesOptional,   // Combined upload (preview + gallery) - optional
  uploadProductPreviewOnly,      // Preview image only
  uploadProductGalleryOnly,      // Gallery images only
  uploadProductPreview,          // Raw multer middleware for preview
  uploadProductGallery           // Raw multer middleware for gallery
}; 