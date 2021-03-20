const express = require("express");
const router = express.Router();

const {
    getAllProducts,
    getProductById,
} = require ("../controller/productController");

//@desc get all products
//@route get /api/products
//@access public
router.get("/", getAllProducts);

//@desc get specific product by id
//@route get /api/products/:id
//@access public
router.get("/:id", getProductById);