const express = require('express');
const route = express.Router();

// Importing user controller functions from user.controllers.js file
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/user.controllers.js');

// Define routes for user operations
route.get('/', getUsers);
route.get('/:id', getUserById);
route.post('/', createUser);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = route;
