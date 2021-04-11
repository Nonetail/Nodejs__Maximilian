const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//NOTE: app set can store key value in express instance (like global)
//GOOGLE: 'view engine' is a reserved key word which tells express which view engine to set up
app.set('view engine', 'ejs');
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
