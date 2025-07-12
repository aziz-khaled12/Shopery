const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const User = require("../../models/User");

exports.getUserById = catchAsyncErrors(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId is required",
    });
  }

  const user = await User.findById(userId).populate("role");
  res.status(201).json({
    success: true,
    user,
  });
});
