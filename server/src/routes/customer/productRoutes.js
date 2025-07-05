const express = require('express');
const router = express.Router();
const { getHotDeals, getPopularProducts } = require('../../controllers/productController');

router.get('/hot-deals', getHotDeals);
router.get('/popular-products', getPopularProducts);

module.exports = router;