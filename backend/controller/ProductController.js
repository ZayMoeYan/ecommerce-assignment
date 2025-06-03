const productService = require('../service/ProductService');
const mongoose = require("mongoose");

async function saveProduct(req, res, next) {
    try{
        const productToSave = req.body;
        const data = await productService.saveProduct(productToSave);
        res.status(201).json({
            data
        })
    }catch (err) {
        if(err instanceof mongoose.Error.ValidationError) {
            res.status(400).json({
                error: err
            })
        }else {
            res.status(500).json({
                error: err
            })
        }
    }
}

async function getAllProducts(req, res, next) {
    try{
        const products = await productService.getAllProducts();
        res.json({
            products
        })
    }catch (err) {
        res.status(404).json({
            error: err.toString()
        })
    }
}

module.exports = {
    saveProduct,
    getAllProducts,
}