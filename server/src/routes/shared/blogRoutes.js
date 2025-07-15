const express = require("express");
const { getBlogs, getBlogById, getPublishedBlogs } = require("../../controllers/blogController");


const router = express.Router();

router.get("/All", getBlogs);
router.get("/:id", getBlogById);
router.post("/published", getPublishedBlogs);

module.exports = router;
