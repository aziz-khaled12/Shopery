const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  slug: {
    type: String,
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

// Auto-generate slug before saving
tagSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.name.replace(/\s+/g, '-').toLowerCase();
  }
  this.modifiedAt = new Date();
  next();
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;