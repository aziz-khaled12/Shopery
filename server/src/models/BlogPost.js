const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 120
  },
  slug: {
    type: String,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    trim: true,
    maxlength: 200
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  previewImage: {
    type: String,
    required: true
  },
  commentsCount: {
    type: Number,
    default: 0
  },
  viewCount: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Auto-generate slug and excerpt before saving
blogPostSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title.replace(/\s+/g, '-').toLowerCase();
  }
  
  if (!this.excerpt && this.content) {
    this.excerpt = this.content.substring(0, 200) + '...';
  }
  
  if (this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  this.modifiedAt = new Date();
  next();
});

// Virtual for reading time
blogPostSchema.virtual('readingTime').get(function() {
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;