// controllers/blogController.js
const { uploadBlogImages, uploadBlogImage } = require('../middleware/uploaders');

const uploadBlogImagesHandler = async (req, res, next) => {
  try {
    // Use the upload middleware
    uploadBlogImages(req, res, (err) => {
      if (err) {
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          return res.status(400).json({ error: 'Too many files uploaded. Maximum is 10.' });
        }
        return res.status(400).json({ error: err.message });
      }

      // Check if files were uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      // Extract URLs and other info from uploaded files
      const uploadedFiles = req.files.map(file => (file.path));

      res.status(200).json({
        message: 'Files uploaded successfully',
        files: uploadedFiles,
        count: uploadedFiles.length
      });
    });
  } catch (error) {
    next(error);
  }
};

const uploadBlogPreviewImageHandler = async (req, res, next) => {
  try {
    // Use the upload middleware
    uploadBlogImage(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      const uploadedFile = req.file.path;

      res.status(200).json({
        message: 'Files uploaded successfully',
        file: uploadedFile,
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadBlogImagesHandler,
  uploadBlogPreviewImageHandler
};