const express = require('express');
const productController = require('../controller/ProductController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.saveProduct);

module.exports = router;