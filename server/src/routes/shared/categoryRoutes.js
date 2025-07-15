const express = require("express");
const {
  getAllCategories,
  insertCategories,
} = require("../../controllers/core/categoryController");
const { uploadCategoryImage } = require("../../middleware/uploaders");

const router = express.Router();

router.get("/All", getAllCategories);
router.post("/", uploadCategoryImage, insertCategories);

module.exports = router;
