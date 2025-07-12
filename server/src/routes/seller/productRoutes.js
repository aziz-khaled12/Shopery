const express = require('express');
const router = express.Router();
const { 
  createProduct, 
  updateProduct, 
  deleteProduct,
  uploadProductImagesHandler,
  uploadProductPreviewImageHandler
} = require('../../controllers/productController');
const authenticateUser = require('../../middleware/auth');


// Upload endpoints for product images
router.post('/images', authenticateUser, uploadProductImagesHandler);
router.post('/preview', authenticateUser, uploadProductPreviewImageHandler);

// Product CRUD operations (without upload middleware)
router.post('/create', authenticateUser, createProduct);  
router.put('/update/:id', authenticateUser, updateProduct);
router.delete('/delete/:id', authenticateUser, deleteProduct);

module.exports = router;