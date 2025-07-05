// routes/blogRoutes.js
const express = require('express');
const { uploadBlogImagesHandler, uploadBlogPreviewImageHandler } = require('../../controllers/blogController');
const router = express.Router();

// POST /api/blogs/images - Upload multiple blog images
router.post('/images', uploadBlogImagesHandler);
router.post('/preview', uploadBlogPreviewImageHandler);

module.exports = router;