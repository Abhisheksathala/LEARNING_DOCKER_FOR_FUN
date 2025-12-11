// make express server bro es6 module use impport

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});
// fake product data get method
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'product 1', price: 100 },
    { id: 2, name: 'product 2', price: 200 },
    { id: 3, name: 'product 3', price: 300 },
  ]);
});
app.listen(PORT, () => {
  console.log('server is running on port 3000');
});
