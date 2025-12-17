// make express server bro es6 module use import

import express from 'express';
import dotenv from 'dotenv';
// import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;
dotenv.config();

app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'product 1', price: 100 },
    { id: 2, name: 'product 2', price: 200 },
    { id: 3, name: 'product 3', price: 300 },
    { id: 4, name: 'product 4', price: 300 },
  ]);
});

// mongoose
//   .connect('mongodb://admin:12345678@localhost:27017/admin')
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection failed:', error.message);
//   });

app.listen(PORT, () => {
  console.log(`Server is removed bro running on port ${PORT}`);
});
