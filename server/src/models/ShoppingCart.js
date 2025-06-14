const mongoose = require('mongoose');
const { Schema } = mongoose;

const productInfoSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  }
});

const shoppingCartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  products: [productInfoSchema],
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

shoppingCartSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

// Add product to cart
shoppingCartSchema.methods.addProduct = function(productId, quantity = 1) {
  const existingProduct = this.products.find(item => 
    item.productId.equals(productId)
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    this.products.push({ productId, quantity });
  }
  return this.save();
};

// Remove product from cart
shoppingCartSchema.methods.removeProduct = function(productId) {
  this.products = this.products.filter(item => 
    !item.productId.equals(productId)
  );
  return this.save();
};

// Update product quantity
shoppingCartSchema.methods.updateQuantity = function(productId, newQuantity) {
  const product = this.products.find(item => 
    item.productId.equals(productId)
  );
  if (product) {
    product.quantity = newQuantity;
  }
  return this.save();
};

// Clear cart
shoppingCartSchema.methods.clearCart = function() {
  this.products = [];
  return this.save();
};

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;