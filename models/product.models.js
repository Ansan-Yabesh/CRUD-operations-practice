const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,   // Product name
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,   // Product price
    required: true,
    min: 0,       // Price cannot be negative   
    validate: {
      validator: (value) => value > 0,
      message: 'Price must be greater than zero.'
    }   
    },
  quantity: {
    type: Number,   // Product quantity
    required: true,
    min: 0,       // Quantity cannot be negative    
    validate: {
      validator: (value) => Number.isInteger(value),    
      message: 'Quantity must be a whole number.'
    }
    },
  description: {    
    type: String,   // Product description
    maxlength: 200,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields    

// Export the Product model
module.exports = mongoose.model('Product', productSchema);
