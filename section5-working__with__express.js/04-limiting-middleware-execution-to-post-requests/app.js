const express = require('express');
// third-party package to parser the req body, (it was removed and added in express, so better to add it manually)
const bodyParser = require('body-parser');

const app = express();

// middleware function to parse the request body for us(don't need to worry about Buffer and stream)
// call next() implicitly
// check out this npm package for more information
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
