const catchAsyncErrors = require("../../middleware/catchAsyncErrors");
const User = require("../../models/User");
const BillingInfo = require("../../models/BillingInfo");

exports.getUserById = catchAsyncErrors(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId is required",
    });
  }

  const user = await User.findById(userId)
    .populate("role")
    .populate("billingAddress");
  res.status(201).json({
    success: true,
    user,
  });
});

exports.updateUser = catchAsyncErrors(async (req, res) => {
  const userData = req.body;
  const { userId } = req.params;

  const updatedUser = await User.findByIdAndUpdate(userId, userData)
    .populate("role")
    .populate("billingAddress");
  if (!updatedUser) {
    return res.status(400).json({ message: "User Not Found" });
  }

  res.status(200).json({
    user: updatedUser,
    message: "User updated succefully",
  });
});

exports.updateUserBillingInfo = catchAsyncErrors(async (req, res) => {
  const billingInfo = req.body;
  const { userId } = req.params;

  // 1. Find user (with await)
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // 2. Try to update existing billing info
  const updatedBillingInfo = await BillingInfo.findOneAndUpdate(
    { userId },
    { $set: billingInfo },
    { new: true, upsert: false } // Don't upsert here, we'll handle creation manually
  );

  if (updatedBillingInfo) {
    const populatedUser = await User.findById(userId)
      .populate("role")
      .populate("billingAddress");
    return res.status(200).json({
      message: "Billing Info Updated",
      user: populatedUser,
    });
  }

  // 3. Create new billing info if none existed
  const newBillingInfo = await BillingInfo.create({
    userId,
    ...billingInfo,
  });

  // 4. Update user's billing address reference
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { billingAddress: newBillingInfo._id },
    { new: true }
  )
    .populate("role")
    .populate("billingAddress");

  res.status(200).json({
    message: "Billing Info Created and Linked",
    user: updatedUser,
  });
});
