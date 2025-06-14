const express = require("express");
const connectDB = require('./src/config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json());
connectDB();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
