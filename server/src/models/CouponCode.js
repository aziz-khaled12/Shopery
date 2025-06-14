const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true
  },
  value: {
    type: Number,
    required: true,
    min: 0
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
    default: 'percentage'
  },
  minOrder: {
    type: Number,
    min: 0
  },
  maxUses: {
    type: Number,
    min: 1
  },
  currentUses: {
    type: Number,
    default: 0,
    min: 0
  },
  validFrom: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for expiration
couponCodeSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const CouponCode = mongoose.model('CouponCode', couponCodeSchema);

module.exports = CouponCode;