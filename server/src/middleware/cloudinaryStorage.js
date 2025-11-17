// middleware/cloudinaryStorage.js
const multer = require("multer");
const { v2: cloudinary } = require("../config/cloudinary");

// Upload a file buffer to Cloudinary
const uploadToCloudinary = (file, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 800, height: 800, crop: "limit" }]
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

// Create uploader similar to old createUploader
const createUploader = (folderName) => {
  const upload = multer({ storage: multer.memoryStorage() });

  return (req, res, next) => {
    upload.any()(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err.message });
      }

      try {
        if (!req.files || req.files.length === 0) {
          req.uploadedFiles = [];
          return next(); // no files uploaded → continue
        }

        const results = [];

        for (const file of req.files) {
          const uploaded = await uploadToCloudinary(file, folderName);
          results.push(uploaded);
        }

        req.uploadedFiles = results;

        next();
      } catch (error) {
        return res.status(500).json({
          success: false,
          error: error.message
        });
      }
    });
  };
};

module.exports = createUploader;
