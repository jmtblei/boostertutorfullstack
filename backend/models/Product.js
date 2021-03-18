const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    logoURL: {
        type: String,
        required: true
    },
    symbolURL: {
        type: String,
        required: true
    },
    setType: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    block: {
        type: String,
        required: true
    }

});

const Product = mongoose.model("product", productSchema);

module.exports = Product;