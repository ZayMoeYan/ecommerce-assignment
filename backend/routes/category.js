const express = require('express');
const router = express.Router();
const categoryController = require('../controller/CategoryController');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.saveCategory);

module.exports = router;