const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  productIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

// Update modifiedAt before saving
wishlistSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

// Add product to wishlist
wishlistSchema.methods.addProduct = function(productId) {
  if (!this.productIds.includes(productId)) {
    this.productIds.push(productId);
  }
  return this.save();
};

// Remove product from wishlist
wishlistSchema.methods.removeProduct = function(productId) {
  this.productIds = this.productIds.filter(id => !id.equals(productId));
  return this.save();
};

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;