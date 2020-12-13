const express = require('express');

// A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

module.exports = router;
