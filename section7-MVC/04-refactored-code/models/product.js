const fs = require('fs');
const path = require('path');

const p = path.join(
  // require.main.filename gets the file name(path) of the main module, dirname get the the folder (path) of that file
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

// cb stands for call back function 
const getProductsFromFile = cb => {
  // readFile is async, so use callback here
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save = () => {
    getProductsFromFile(products => {
      // JSON is a text-based data format following JavaScript object syntax
      // JSON exists as a string — useful when you want to transmit data across a network. 
      // It needs to be converted to a native JavaScript object when you want to access the data.
      // JSON is a string whose format very much resembles JavaScript object literal format.
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  // static function can't be accessed in instance, can be accessed by Class
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
