
const express = require("express");
const { getProductDetails, getProductsByCategory, getProductsWithIds } = require("../../controllers/productController");


const router = express.Router();

router.get("/:productId", getProductDetails);
router.get("/category/:category", getProductsByCategory);
router.post("/all", getProductsWithIds)

module.exports = router;
