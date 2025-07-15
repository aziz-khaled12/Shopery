const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  images: [{
    type: String,
    required: true
  }],
  previewImage: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    isActive: {
      type: Boolean,
      default: false
    },
    percentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    price:{
      type: Number,
      default: 0
    },
    startDate: Date,
    endDate: Date
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

productSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

productSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toFixed(2)}`;
});

productSchema.virtual('discountedPrice').get(function() {
  if (this.discount.isActive) {
    return this.price * (1 - (this.discount.percentage / 100));
  }
  return this.price;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;