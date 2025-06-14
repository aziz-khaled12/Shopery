const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
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
  products: [{
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    priceAtPurchase: {
      type: Number,
      required: true
    },
    nameAtPurchase: {
      type: String,
      required: true
    }
  }],
  paymentMethod: {
    type: Schema.Types.ObjectId,
    ref: 'PaymentMethod',
    required: true
  },
  shippingFees: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending'
  },
  total: {
    type: Number,
    required: true,
    min: 0
  },
  couponCodeId: {
    type: Schema.Types.ObjectId,
    ref: 'CouponCode'
  },
  discountApplied: {
    type: Number,
    default: 0
  },
  note: {
    type: String,
    trim: true
  },
  shippingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'BillingInfo'
  },
  trackingNumber: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

// Update modifiedAt before saving
orderSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

// Virtual for subtotal (before shipping and discounts)
orderSchema.virtual('subtotal').get(function() {
  return this.products.reduce(
    (sum, item) => sum + (item.priceAtPurchase * item.quantity), 0
  );
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;