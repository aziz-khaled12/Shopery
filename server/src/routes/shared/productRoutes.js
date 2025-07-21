
const express = require("express");
const { getProductDetails, getProductsByCategory } = require("../../controllers/productController");


const router = express.Router();

router.get("/:productId", getProductDetails);
router.get("/category/:category", getProductsByCategory);

module.exports = router;
