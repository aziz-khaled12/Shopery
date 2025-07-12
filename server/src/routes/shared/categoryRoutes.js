
const express = require("express");
const { getAllCategories, insertCategories } = require("../../controllers/core/categoryController");
const authenticateUser = require("../../middleware/auth");

const router = express.Router();

router.get("/All",  getAllCategories);
router.post("/", authenticateUser, insertCategories);

module.exports = router;
