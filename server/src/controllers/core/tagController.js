const Tag = require("../../models/Tag");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors");

exports.insertTags = catchAsyncErrors(async (req, res) => {
  const { names } = req.body;

  if (names.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Tag name is required",
    });
  }

  console.log("Names received:", names);

  // Create multiple tags from the array of names
const tags = await Promise.all(names.map(name => Tag.create({ name })));
  res.status(201).json({
    success: true,
    tags,
  });
});

exports.getAllTags = catchAsyncErrors(async (req, res) => {
  const tags = await Tag.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    tags,
  });
});