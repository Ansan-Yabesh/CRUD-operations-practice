const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,   // Username
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,   // User email
    required: true,
    unique: true,   // Email must be unique
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'], // Basic email format validation
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,   // User password
    required: true,
    minlength: 6,
    maxlength: 100, // In a real application, passwords should be hashed
  },
  age: {
    type: Number,   // User age
    required: true,
    min: [13, 'Age must be at least 13 years old'],
    max: [120, 'Age must be less than 120 years old'],
    validate: {
      validator: (value) => Number.isInteger(value),
      message: 'Age must be a whole number.'
    }
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Export the User model
module.exports = mongoose.model('User', userSchema);
