//imports
const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

// routes imports
const blogRoutes = require("./src/routes/seller/blogRoutes");
const productRoutes = require("./src/routes/customer/productRoutes");
const sellerProductRoutes = require("./src/routes/seller/productRoutes")

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

// server initialization
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
