const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// express feature!, not node.js feature
// app set can store key value in express instance (like global)
// 'view engine' is a reserved key word which tells express which view engine to set up
// pug has auto support with express
app.set('view engine', 'pug');
// default path would be main directory and then the view folder 
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
