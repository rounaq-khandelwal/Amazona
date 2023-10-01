import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}.`);
});
