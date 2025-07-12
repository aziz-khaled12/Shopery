const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  if (!this.slug && this.name) {
    this.slug = this.name
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }
  this.modifiedAt = new Date();
  next();
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;