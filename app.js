require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/product.routes.js');
const userRoutes = require('./routes/user.routes.js');
const connectDB = require('./db/db.connect.js');

const app = express();

// Connect to database
connectDB;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port 3k`) ;
});