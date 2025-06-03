const Category = require('../models/CategorySchema');

async function saveCategory(category) {
    const newCategory = new Category(category);
    return newCategory.save();
}

async function getAllCategories() {
    const categories = await Category.find();
    if(!categories.length) {
        throw Error('There is no categories.');
    }else {
        return categories;
    }
}

module.exports = {
    saveCategory,
    getAllCategories
}