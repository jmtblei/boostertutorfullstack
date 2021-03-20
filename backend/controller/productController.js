const Product = require("../models/Product");

//@desc helper function 
//@get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).son({message: "Server Error"});
    }
};

//@desc helper function
//@get specific product by id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).son({message: "Server Error"});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
}

