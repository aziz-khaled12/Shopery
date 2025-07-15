// controllers/blogController.js
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const {
  uploadBlogImages,
  uploadBlogImage,
} = require("../middleware/uploaders");
const BlogPost = require("../models/BlogPost");

const uploadBlogImagesHandler = async (req, res, next) => {
  try {
    // Use the upload middleware
    uploadBlogImages(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res
            .status(400)
            .json({ error: "Too many files uploaded. Maximum is 10." });
        }
        return res.status(400).json({ error: err.message });
      }

      // Check if files were uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      // Extract URLs and other info from uploaded files
      const uploadedFiles = req.files.map((file) => file.path);

      res.status(200).json({
        message: "Files uploaded successfully",
        files: uploadedFiles,
        count: uploadedFiles.length,
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

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const uploadedFile = req.file.path;

      res.status(200).json({
        message: "File uploaded successfully",
        file: uploadedFile,
      });
    });
  } catch (error) {
    next(error);
  }
};

const saveBlogPost = catchAsyncErrors(async (req, res) => {
  const blog = req.body;
  const newBlogPost = await BlogPost.create(blog)
    .populate("creatorId", "name")
    .populate("category", "name")
    .populate("tags", "name");

  res.status(201).json({
    success: true,
    message: "Blog post created successfully",
    blog: newBlogPost,
  });
});

const publishBlogPost = catchAsyncErrors(async (req, res) => {
  const { blogId } = req.params;
  const blog = await BlogPost.findByIdAndUpdate(blogId, { isPublished: true })
    .populate("creatorId", "name")
    .populate("category", "name")
    .populate("tags", "name");

  if (!blog) {
    return res.status(404).json({ error: "Blog post not found" });
  }
  res.status(201).json({
    success: true,
    message: "Blog post is published successfully",
    blog,
  });
});

const getBlogs = catchAsyncErrors(async (req, res) => {
  const blogs = await BlogPost.find()
    .sort({ createdAt: -1 })
    .populate("creatorId", "name")
    .populate("category", "name")
    .populate("tags", "name");
  res.status(200).json({
    success: true,
    blogs,
    count: blogs.length,
  });
});

const getPublishedBlogs = catchAsyncErrors(async (req, res) => {
  const blogs = await BlogPost.find({ isPublished: true })
    .sort({
      createdAt: -1,
    })
    .populate("creatorId", "name")
    .populate("category", "name")
    .populate("tags", "name");
  res.status(200).json({
    success: true,
    blogs,
    count: blogs.length,
  });
});

const getBlogById = catchAsyncErrors(async (req, res) => {
  const { blogId } = req.params;
  const blog = await BlogPost.findById(blogId)
    .populate("creatorId", "name")
    .populate("category", "name")
    .populate("tags", "name");
  res.status(200).json({
    success: true,
    blog,
  });
});

module.exports = {
  uploadBlogImagesHandler,
  uploadBlogPreviewImageHandler,
  saveBlogPost,
  publishBlogPost,
  getBlogs,
  getBlogById,
  getPublishedBlogs,
};
