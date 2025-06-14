const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellerRatingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    trim: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
}, {
  // Ensure a user can only rate a seller once per product
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Compound index to prevent duplicate ratings
sellerRatingSchema.index(
  { userId: 1, sellerId: 1, productId: 1 }, 
  { unique: true }
);

// Update modifiedAt before saving
sellerRatingSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

// Virtual for formatted date
sellerRatingSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const SellerRating = mongoose.model('SellerRating', sellerRatingSchema);

module.exports = SellerRating;