const express = require('express');
const route = express.Router();

// Importing product controller functions from product.controllers.js file
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers.js');

// Define routes for product operations
route.get('/', getProducts);
route.get('/:id', getProductById);
route.post('/', createProduct);
route.put('/:id', updateProduct);
route.delete('/:id', deleteProduct);

module.exports = route;
