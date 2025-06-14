const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/Product");

exports.createProduct = catchAsyncErrors(async (req, res) => {
  const newProduct = req.body;

  const previewImage = req.files["previewImage"]?.[0];
  const previewImageUrl = previewImage?.path || null;
  const previewImageId = previewImage?.filename || null;

  const galleryImages = (req.files["galleryImages"] || []).map((file) => ({
    url: file.path,
    public_id: file.filename,
  }));

  const product = await Product.create({
    ...newProduct,
    previewImage: previewImageUrl,
    previewImageId,
    images: galleryImages,
  });
  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Product creation failed",
    });
  }
  res.status(201).json({
    success: true,
    product,
  });
});

exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });

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
  const productId = req.params.id;
  const product = await Product.findById(productId);

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

  const previewImage = req.files["previewImage"]?.[0];
  const previewImageUrl = previewImage?.path || null;
  const previewImageId = previewImage?.filename || null;

  const galleryImages = (req.files["galleryImages"] || []).map((file) => ({
    url: file.path,
    public_id: file.filename,
  }));

  const product = await Product.findByIdAndUpdate(
    productId,
    {
      ...updatedData,
      previewImage: previewImageUrl,
      previewImageId,
      images: galleryImages,
    },
    { new: true, runValidators: true }
  );

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
  const products = await Product.find({ category }).sort({ createdAt: -1 });

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
  }).sort({ createdAt: -1 });

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

  const products = await Product.find(filter).sort({ createdAt: -1 });

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

