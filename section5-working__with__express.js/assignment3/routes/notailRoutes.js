const express = require('express');
const path = require('path');

const rootPath = require('../util/helper');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'notail.html'));
})

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'yiwei.html'))
})

module.exports = router;