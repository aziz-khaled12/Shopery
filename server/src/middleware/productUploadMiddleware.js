const multer = require("multer");
const { v2: cloudinary } = require("../config/cloudinary");

// Multer memory storage (important for Vercel)
const upload = multer({ storage: multer.memoryStorage() });

// Upload a single file buffer to Cloudinary
const uploadToCloudinary = (file, folder = "product_images") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        transformation: [
          { width: 800, height: 800, crop: "limit" }
        ]
      },
      (err, result) => {
        if (err) return reject(err);
        resolve({
          url: result.secure_url,
          public_id: result.public_id
        });
      }
    );

    stream.end(file.buffer);
  });
};

// Handle preview + gallery uploads
const handleUploads = async (req, res, next, required = true) => {
  try {
    const previewFile = req.files?.previewImage?.[0] || null;
    const galleryFiles = req.files?.galleryImages || [];

    if (required && !previewFile && galleryFiles.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Preview image or gallery images are required."
      });
    }

    // Upload preview
    let previewImage = null;
    if (previewFile) {
      previewImage = await uploadToCloudinary(previewFile);
    }

    // Upload gallery
    const galleryImages = [];
    for (const file of galleryFiles) {
      const uploaded = await uploadToCloudinary(file);
      galleryImages.push(uploaded);
    }

    req.uploadedFiles = {
      previewImage,
      galleryImages
    };

    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

/* -------------------------
   PUBLIC MIDDLEWARE EXPORTS
------------------------- */

// Combined upload (preview + gallery) REQUIRED
const uploadProductImages = [
  upload.fields([
    { name: "previewImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 5 }
  ]),
  (req, res, next) => handleUploads(req, res, next, true)
];

// Combined upload (preview + gallery) OPTIONAL
const uploadProductImagesOptional = [
  upload.fields([
    { name: "previewImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 5 }
  ]),
  (req, res, next) => handleUploads(req, res, next, false)
];

// Preview only
const uploadProductPreviewOnly = [
  upload.single("previewImage"),
  async (req, res, next) => {
    try {
      if (!req.file) return next();

      req.uploadedFiles = {
        previewImage: await uploadToCloudinary(req.file)
      };

      next();
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message
      });
    }
  }
];

// Gallery only
const uploadProductGalleryOnly = [
  upload.array("galleryImages", 5),
  async (req, res, next) => {
    try {
      const uploaded = [];
      for (const file of req.files) {
        uploaded.push(await uploadToCloudinary(file));
      }

      req.uploadedFiles = { galleryImages: uploaded };
      next();
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err.message
      });
    }
  }
];

module.exports = {
  uploadProductImages,
  uploadProductImagesOptional,
  uploadProductPreviewOnly,
  uploadProductGalleryOnly
};
