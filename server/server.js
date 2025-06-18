const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

// routes
const blogRoutes = require("./src/routes/seller/blogRoutes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// ... other middleware and routes
app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
