const Product = require("../models/product.models.js");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, quantity } = req.body;
    const product = new Product({ name, price, description, quantity });
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description, quantity } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = name;
    product.price = price;
    product.description = description;
    product.quantity = quantity;

    await product.save();
    res.json({ message: "Product updated", product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted", deletedProduct: product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
