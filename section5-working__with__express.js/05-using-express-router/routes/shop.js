const express = require('express');

//NOTE: GOOGLE: A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router = express.Router();

//NOTE: app.get/post/ and so on will do a exact match for the route parameter
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;
