const mongoose = require('mongoose');
const categoryService = require('../service/CategoryService');

async function saveCategory(req, res, next) {
    try{
        const categoryToSave = req.body;
        const data = await categoryService.saveCategory(categoryToSave);
        res.status(201).json({
            data
        })
    }catch (err) {
        if(err instanceof mongoose.Error.ValidationError) {
            res.status(400).json({
                error: err.toString(),
            })
        }else {
            res.status(500).json({
                error: err.toString(),
            })
        }
    }
}

async function getAllCategories(req, res, next) {
    try{
        const categories = await categoryService.getAllCategories();
        res.json({
            categories
        })
    }catch (err) {
        res.status(404).json({
            error: err.toString(),
        })
    }
}

module.exports = {
    saveCategory,
    getAllCategories
}
