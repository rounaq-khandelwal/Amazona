import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const Product = data.products.find((x) => x.slug === req.params.slug);
  if (Product) {
    res.send(Product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}.`);
});
