const express = require('express');
const router = express.Router();
const { 
  createProduct, 
  updateProduct, 
  deleteProduct,
  uploadProductImagesHandler,
  uploadProductPreviewImageHandler
} = require('../../controllers/productController');


// Upload endpoints for product images
router.post('/images', uploadProductImagesHandler);
router.post('/preview', uploadProductPreviewImageHandler);

// Product CRUD operations (without upload middleware)
router.post('/create', createProduct);  
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;