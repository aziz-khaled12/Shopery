
const express = require("express");
const { getProductDetails } = require("../../controllers/productController");


const router = express.Router();

router.get("/:productId", getProductDetails);

module.exports = router;
