const {
  uploadProductImage,
  uploadProductImages,
} = require("../middleware/uploaders");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/Product");
const createUploader = require("../middleware/cloudinaryStorage");
const Category = require("../models/Category");

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

  // First create the product
  const product = await Product.create(newProduct);
  
  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Product creation failed",
    });
  }

  // Then populate the references in a separate query
  const populatedProduct = await Product.findById(product._id)
    .populate("category")
    .populate("tags");

  res.status(201).json({
    success: true,
    product: populatedProduct
  });
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
  const { category } = req.params;

  const fullCategory = await Category.findOne({ name: category });
  const categoryId = fullCategory._id;

  console.log("category id: ", categoryId)

  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 10; // Default 10 items per page
  const skip = (page - 1) * limit;

  const [products, totalProducts] = await Promise.all([
    Product.find({ category: categoryId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("category")
      .populate("tags"),
    Product.countDocuments({ category: categoryId }),
  ]);

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found in this category",
    });
  }

  res.status(200).json({
    success: true,
    products,
    pagination: {
      total: totalProducts,
      page,
      pages: Math.ceil(totalProducts / limit),
      limit,
    },
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
  const {
    category,
    priceRange,
    rating,
    tags,
    page = 1,
    limit = 10,
  } = req.query;

  let filter = {};

  // Category filter
  if (category) {
    filter.category = category;
  }

  // Price range filter
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split(",").map(Number);
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }
  }

  // Rating filter
  if (rating && !isNaN(rating)) {
    filter.rating = { $gte: Number(rating) };
  }

  // Tags filter - handles both single ID and comma-separated IDs
  if (tags) {
    const tagIds = Array.isArray(tags) ? tags : tags.split(",");
    if (tagIds.length > 0) {
      filter.tags = { $in: tagIds };
    }
  }

  // Add pagination
  const skip = (page - 1) * limit;

  const products = await Product.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit))
    .populate("category")
    .populate("tags");

  const totalProducts = await Product.countDocuments(filter);

  if (!products || products.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found matching the filters",
    });
  }

  res.status(200).json({
    success: true,
    products,
    pagination: {
      total: totalProducts,
      page: Number(page),
      pages: Math.ceil(totalProducts / limit),
      limit: Number(limit),
    },
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
