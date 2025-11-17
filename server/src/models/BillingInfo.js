const mongoose = require("mongoose");
const { Schema } = mongoose;

const billingInfoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    required: false,
    trim: true,
  },
  country: {
    type: String,
    required: false,
    trim: true,
  },
  state: {
    type: String,
    required: false,
    trim: true,
  },
  zipCode: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: false,
    trim: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update modifiedAt before saving
billingInfoSchema.pre("save", function (next) {
  this.modifiedAt = new Date();
  next();
});

const BillingInfo = mongoose.model("BillingInfo", billingInfoSchema);

module.exports = BillingInfo;
