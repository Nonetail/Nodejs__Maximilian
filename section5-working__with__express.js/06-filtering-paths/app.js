const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//NOTE: all the adminRoutes are under /admin route
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//NOTE: this middleware will handle all the unmatched routes
app.use((req, res, next) => {
    //NOTE: set status 404, Default: 200, send has to be the last one
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
