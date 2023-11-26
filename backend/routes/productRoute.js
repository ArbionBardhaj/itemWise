const express = require("express");
const { createProduct } = require("../controllers/productController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/",protect, createProduct)

 

module.exports = router