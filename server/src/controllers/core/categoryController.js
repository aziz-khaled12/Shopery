const Category = require("../../models/Category");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors");

exports.getAllCategories = catchAsyncErrors(async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    categories,
  });
});



exports.insertCategories = catchAsyncErrors(async (req, res) => {
  // Handle single category creation with image upload
  if (req.file) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const category = await Category.create({
      name,
      image: req.file.path // Cloudinary URL
    });

    return res.status(201).json({
      success: true,
      categories: [category],
    });
  }
});