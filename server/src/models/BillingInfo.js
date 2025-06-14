const mongoose = require('mongoose');
const { Schema } = mongoose;

const billingInfoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: String,
    trim: true
  },
  street: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zipCode: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
});

// Update modifiedAt before saving
billingInfoSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

const BillingInfo = mongoose.model('BillingInfo', billingInfoSchema);

module.exports = BillingInfo;