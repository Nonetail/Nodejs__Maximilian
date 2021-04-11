const express = require('express');
const path = require('path');

const notailRoute = require('./routes/notailRoutes');
const rootPath = require('./util/helper');

const app = express();

//NOTE: If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
// app.use(express.static('public'))
app.use(express.static(path.join(rootPath, 'public')))
// or use __dirname
//app.use(express.static(path.join(__dirname, 'public')))

app.use(notailRoute);

app.listen(3000);

