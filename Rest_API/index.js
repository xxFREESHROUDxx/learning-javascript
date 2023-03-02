const express = require('express');
const app = express(); // created express application
const Joi = require('joi');

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
  const { error } = validation(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  return res.json(product);
});

// Update specific product data(using put method to update whole items)
app.put('/api/products/:id', (req, res) => {
  const { error } = validation(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  const index = products.findIndex((product) => product.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      message: 'Products not found with this ID',
    });
  }

  products[index].name = req.body.name;
  products[index].price = req.body.price;

  return res.json({
    product: products[index],
  });
});

function validation(body) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    price: Joi.number().required(),
  });

  return schema.validate(body);
}

app.listen(3000, () => console.log('Server is running at port 3000'));
