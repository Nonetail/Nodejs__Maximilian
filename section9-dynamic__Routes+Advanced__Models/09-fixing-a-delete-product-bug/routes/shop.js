const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//NOTE: this /test route will be handled
// router.get('/products/test');

//NOTE: dynamic segment in express
router.get('/products/:productId', shopController.getProduct);

//NOTE: order matters here, if we have /test route wouldn't go through here, since it's been handled above
// router.get('/products/test');

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
