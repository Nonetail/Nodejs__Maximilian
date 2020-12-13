const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// all the adminRoutes are under /admin route
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// this middleware will handle all the unmatched routes
app.use((req, res, next) => {
    // add request status 404
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
