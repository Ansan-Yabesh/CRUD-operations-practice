require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('✅ MongoDB Connected Successfully');

}).catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err.message);
  console.log('💡 Make sure MongoDB is running and the connection string is correct');
});

module.exports = mongoose;
