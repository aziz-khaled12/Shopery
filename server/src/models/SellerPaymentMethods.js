const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellerPaymentMethodsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  methods: [{
    type: Schema.Types.ObjectId,
    ref: 'PaymentMethod'
  }],
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

// Update modifiedAt before saving
sellerPaymentMethodsSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

// Add payment method for seller
sellerPaymentMethodsSchema.methods.addMethod = function(methodId) {
  if (!this.methods.includes(methodId)) {
    this.methods.push(methodId);
  }
  return this.save();
};

// Remove payment method
sellerPaymentMethodsSchema.methods.removeMethod = function(methodId) {
  this.methods = this.methods.filter(id => !id.equals(methodId));
  return this.save();
};

const SellerPaymentMethods = mongoose.model('SellerPaymentMethods', sellerPaymentMethodsSchema);

module.exports = SellerPaymentMethods;