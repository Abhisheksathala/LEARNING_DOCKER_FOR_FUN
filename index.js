// make express server bro es6 module use impport

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello world');
});
// fake product data get method
app.get('/products', (req, res) => {
  // res.json([
  //   { id: 1, name: 'product 1', price: 100 },
  //   { id: 2, name: 'product 2', price: 200 },
  //   { id: 3, name: 'product 3', price: 300 },
  // ]);
  res.send('hello');
});

mongoose
  .connect('mongodb://admin:12345678@localhost:27017/admin')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
  });
