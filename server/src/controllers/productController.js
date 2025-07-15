const {
  uploadProductImage,
  uploadProductImages,
} = require("../middleware/uploaders");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/Product");
const createUploader = require("../middleware/cloudinaryStorage");

// Product Image Upload Handlers
exports.uploadProductImagesHandler = async (req, res, next) => {
  try {
    // Use the upload middleware
    uploadProductImages(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res
            .status(400)
            .json({ error: "Too many files uploaded. Maximum is 4." });
        }
        return res.status(400).json({ error: err.message });
      }

      // Check if files were uploaded
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files uploaded" });
      }

      // Extract URLs and other info from uploaded files
      const uploadedFiles = req.files.map((file) => ({
        url: file.path,
        public_id: file.filename,
      }));

      res.status(200).json({
        message: "Files uploaded successfully",
        files: uploadedFiles,
        count: uploadedFiles.length,
      });
    });
  } catch (error) {
    next(error);
  }
};

exports.uploadProductPreviewImageHandler = async (req, res, next) => {
  try {
    // Use the upload middleware
    uploadProductImage(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const uploadedFile = {
        url: req.file.path,
        public_id: req.file.filename,
      };

      res.status(200).json({
        message: "File uploaded successfully",
        file: uploadedFile,
      });
    });
  } catch (error) {
    next(error);
  }
};

exports.createProduct = catchAsyncErrors(async (req, res) => {
  const newProduct = req.body;

  const product = await Product.create(newProduct)
    .populate("category")
    .populate("tags");

  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Product creation failed",
    });
  }

  res.status(201).json(product);
});

exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find()
    .sort({ createdAt: -1 })
    .populate("category")
    .populate("tags");

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found",
    });
  }

  res.status(200).json({
    success: true,
    products,
  });
});

exports.getProductDetails = catchAsyncErrors(async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId)
    .populate("category")
    .populate("tags");

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  // Handle preview image URL from request body
  const previewImageUrl = updatedData.previewImage || null;
  const previewImageId = updatedData.previewImageId || null;

  // Handle gallery images URLs from request body
  const galleryImages = updatedData.images || [];

  const product = await Product.findByIdAndUpdate(
    productId,
    {
      ...updatedData,
      previewImage: previewImageUrl,
      previewImageId,
      images: galleryImages,
    },
    { new: true, runValidators: true }
  )
    .populate("category")
    .populate("tags");

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

exports.getProductsByCategory = catchAsyncErrors(async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category })
    .sort({ createdAt: -1 })
    .populate("category")
    .populate("tags");

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found in this category",
    });
  }

  res.status(200).json({
    success: true,
    products,
  });
});

exports.searchProducts = catchAsyncErrors(async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const products = await Product.find({
    name: { $regex: query, $options: "i" },
  })
    .sort({ createdAt: -1 })
    .populate("category")
    .populate("tags");

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found matching the search query",
    });
  }

  res.status(200).json({
    success: true,
    products,
  });
});

exports.filterProducts = catchAsyncErrors(async (req, res) => {
  const { category, priceRange, rating } = req.query;

  let filter = {};

  if (category) {
    filter.category = category;
  }
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split(",").map(Number);
    filter.price = { $gte: minPrice, $lte: maxPrice };
  }
  if (rating) {
    filter.rating = { $gte: Number(rating) };
  }

  const products = await Product.find(filter)
    .sort({ createdAt: -1 })
    .populate("category")
    .populate("tags");

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found matching the filters",
    });
  }

  res.status(200).json({
    success: true,
    products,
  });
});

exports.getHotDeals = catchAsyncErrors(async (req, res) => {
  const products = await Product.find({ discount: { $gt: 0 } })
    .sort({ discount: -1 })
    .limit(12)
    .populate("category")
    .populate("tags");
  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No hot deals found",
    });
  }
  res.status(200).json({
    success: true,
    products,
  });
});

exports.getPopularProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find()
    .sort({ rating: -1 })
    .limit(10)
    .populate("category")
    .populate("tags");
  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No popular products found",
    });
  }
  res.status(200).json({
    success: true,
    products,
  });
});
