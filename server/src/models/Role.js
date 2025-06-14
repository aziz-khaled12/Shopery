const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ['customer', 'seller'],
    default: 'customer'
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
roleSchema.pre('save', function(next) {
  this.modifiedAt = new Date();
  next();
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;