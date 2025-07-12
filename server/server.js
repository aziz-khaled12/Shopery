//imports
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

// routes imports
const blogRoutes = require("./src/routes/seller/blogRoutes");
const productRoutes = require("./src/routes/customer/productRoutes");
const sellerProductRoutes = require("./src/routes/seller/productRoutes")
const categoryRoutes = require("./src/routes/shared/categoryRoutes");
const tagRoutes = require("./src/routes/shared/tagRoutes");
const userRoutes = require("./src/routes/shared/userRoutes");
const authRoutes = require("./src/routes/authRoutes");

// app configuration
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// routes usage
app.use("/api/seller/blogs", blogRoutes);
app.use("/api/seller/products", sellerProductRoutes);
app.use("/api/customer/products", productRoutes);
app.use("/api/shared/category", categoryRoutes);
app.use("/api/shared/tag", tagRoutes);
app.use("/api/shared/user", userRoutes);
app.use("/api/auth", authRoutes);

// server initialization
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
