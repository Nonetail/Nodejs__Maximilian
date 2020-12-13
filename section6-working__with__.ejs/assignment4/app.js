const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

const names = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('notail', { name: 'notail' })
});

// add user as a seperate route 
app.post('/add-user', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.redirect('/');
});

app.get('/user', (req, res) => {
    res.render('yiwei', { name: 'yiwei', names: names })
})

app.listen(3000);