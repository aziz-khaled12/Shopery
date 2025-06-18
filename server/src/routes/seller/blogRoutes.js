// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { uploadBlogImagesHandler, uploadBlogPreviewImageHandler } = require('../../controllers/blogController');

// POST /api/blogs/images - Upload multiple blog images
router.post('/images', uploadBlogImagesHandler);
router.post('/preview', uploadBlogPreviewImageHandler);

module.exports = router;