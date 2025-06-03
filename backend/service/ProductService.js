const Product = require('../models/ProductSchema');
const mongoose = require("mongoose");

async function saveProduct(product) {
    const newProduct = new Product({
        ...product,
        category: new mongoose.Types.ObjectId(product.category),
    });
    return newProduct.save();
}

async function getAllProducts() {
    const products = await Product.find().populate('category');
    if(!products.length) {
        throw Error('There is no products')
    }else {
        return products;
    }
}

module.exports = {
    saveProduct,
    getAllProducts
}