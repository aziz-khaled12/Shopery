const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
categorySchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;