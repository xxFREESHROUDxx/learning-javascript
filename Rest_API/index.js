const express = require('express');
const app = express(); // created express application

const { v4: uuidv4 } = require('uuid');

// creating basic routes
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center;">Hello World!</h1>');
});

const products = [
  {
    id: '1',
    name: 'Orange',
    price: 20,
  },
  {
    id: '2',
    name: 'Apple',
    price: 30,
  },
  {
    id: '3',
    name: 'Banana',
    price: 15,
  },
];

// Show list of all produucts
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Show specific products
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === id);
  if (!product) {
    return res.status(404).json({
      error: 'No product found with this ID',
    });
  }
  return res.json(product);
});

// Insert a product data
app.use(express.json()); //required for posting
app.post('/api/products', (req, res) => {
  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  return res.json(product);
});

app.listen(3000, () => console.log('Server is running at port 3000'));
