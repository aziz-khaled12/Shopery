//imports
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

// routes imports

// seller routes
const blogRoutes = require("./src/routes/seller/blogRoutes");
const sellerProductRoutes = require("./src/routes/seller/productRoutes")

// customer routes
const productRoutes = require("./src/routes/customer/productRoutes");

// shared routes
const sharedCategoryRoutes = require("./src/routes/shared/categoryRoutes");
const sharedTagRoutes = require("./src/routes/shared/tagRoutes");
const sharedUserRoutes = require("./src/routes/shared/userRoutes");
const sharedBlogRoutes = require("./src/routes/shared/blogRoutes");
const sharedProductRoutes = require("./src/routes/shared/productRoutes");
const authRoutes = require("./src/routes/authRoutes");

// app configuration
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// routes usage

// seller routes
app.use("/api/seller/blogs", blogRoutes);
app.use("/api/seller/products", sellerProductRoutes);

// customer routes
app.use("/api/customer/products", productRoutes);

// shared routes
app.use("/api/shared/category", sharedCategoryRoutes);
app.use("/api/shared/tag", sharedTagRoutes);
app.use("/api/shared/user", sharedUserRoutes);
app.use("/api/shared/blogs", sharedBlogRoutes);
app.use("/api/shared/products", sharedProductRoutes);
app.use("/api/auth", authRoutes);


// server initialization
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
