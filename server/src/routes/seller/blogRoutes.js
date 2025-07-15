// routes/blogRoutes.js
const express = require("express");
const {
  uploadBlogImagesHandler,
  uploadBlogPreviewImageHandler,
  saveBlogPost,
  publishBlogPost,
} = require("../../controllers/blogController");
const router = express.Router();

// POST /api/blogs/images - Upload multiple blog images
router.post("/images", uploadBlogImagesHandler);
router.post("/preview", uploadBlogPreviewImageHandler);
router.post("/save", saveBlogPost);
router.put("/publish/:blogId", publishBlogPost);

module.exports = router;
