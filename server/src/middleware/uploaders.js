// middleware/uploaders.js
const createUploader = require('./cloudinaryStorage');

// Single file uploaders
const uploadProfilePicture = createUploader('profile_pictures').single('image');
const uploadProductImage = createUploader('product_images').single('image');
const uploadBlogImage = createUploader('blog_images').single('image');

// Multi-file uploaders (e.g., for galleries)
const uploadProductImages = createUploader('product_images').array('images', 5); // max 5
const uploadBlogImages = createUploader('blog_images').array('images', 10); // max 10

module.exports = {
  uploadProfilePicture,
  uploadProductImage,
  uploadBlogImage,
  uploadProductImages,
  uploadBlogImages,
};
