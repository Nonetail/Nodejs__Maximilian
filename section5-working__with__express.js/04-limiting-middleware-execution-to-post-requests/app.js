const express = require('express');
//NOTE: third-party package to parser the req body, (it was removed and added in express, so better to add it manually)
const bodyParser = require('body-parser');

const app = express();

//NOTE: GOOGLE: middleware function to parse the request body for us(don't need to worry about Buffer and stream)
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//NOTE: app.use works for all http methods, app.post only work with post requeest
app.post('/product', (req, res, next) => {
  //NOTE: request doesn't try to parse the body by default
  console.log(req.body);
  //NOTE: easy redirect function from express
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
