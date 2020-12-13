const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // how express sends a file
  // 1st Unless the root option is set in the options object, path must be an absolute path to the file.
  // 2st res.sendFile('/views/shop.html'); won't work since /views here ref to the root folder on operating system
  // __dirname is a global variable holds the absolute path in operating system to this project folder
  // path.join can build the path on both linux(/) or windows(\)
  // use .. instead of ../ would be better practice 
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
