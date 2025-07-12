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
  const { names } = req.body;

  if (names.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Tag name is required",
    });
  }

  console.log("Names received:", names);

  // Create multiple tags from the array of names
const categories = await Promise.all(names.map(name => Category.create({ name })));
  res.status(201).json({
    success: true,
    categories,
  });
});

