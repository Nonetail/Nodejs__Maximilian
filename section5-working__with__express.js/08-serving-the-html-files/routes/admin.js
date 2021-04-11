const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  //GOOGLE: 1st Unless the root option is set in the options object, path must be an absolute path to the file.
  //NOTE: 2st res.sendFile('/views/shop.html'); won't work since /views here ref to the root folder on operating system
  //NOTE: __dirname is a global variable holds the absolute path to the folder we use it (this case _dirname is pointing to routes folder) in operating system
  //NOTE: path.join can build the path on both linux(/) or windows(\)
  //NOTE: use .. instead of ../ would be better practice 
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
