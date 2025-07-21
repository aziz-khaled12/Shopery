const express = require("express");
const { getUserById, updateUser, updateUserBillingInfo } = require("../../controllers/core/userController");
const authenticateUser = require("../../middleware/auth");

const router = express.Router();

router.get("/:userId", authenticateUser, getUserById);
router.put("/update/:userId", authenticateUser, updateUser);
router.put("/update/billing/:userId", authenticateUser, updateUserBillingInfo);

module.exports = router;
