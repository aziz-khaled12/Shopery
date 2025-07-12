const express = require("express");
const { getUserById } = require("../../controllers/core/userController");
const authenticateUser = require("../../middleware/auth");

const router = express.Router();

router.get("/:userId", authenticateUser, getUserById);

module.exports = router;
