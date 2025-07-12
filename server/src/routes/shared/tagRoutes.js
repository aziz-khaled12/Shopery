const express = require("express");
const { insertTags, getAllTags } = require("../../controllers/core/tagController");
const authenticateUser = require("../../middleware/auth");

const router = express.Router();

router.get("/All", getAllTags);
router.post("/",authenticateUser, insertTags);

module.exports = router;
