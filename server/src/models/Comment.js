const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['post', 'product'],
    default: 'product'
  },
  targetId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'type' // Dynamic reference based on type
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
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
commentSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;