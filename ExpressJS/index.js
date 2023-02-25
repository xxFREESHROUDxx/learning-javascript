// Create server using express

const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.get('host'));
  console.log(req.originalUrl);

  next();
});

app.get('/', (req, res, next) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
  res.json({
    name: 'Baibhav',
    age: 23,
  });
});

app.post('/login', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);

  res.send('User Login Successful');
});

app.listen(3000, () => console.log('Server is running at port 3000'));
