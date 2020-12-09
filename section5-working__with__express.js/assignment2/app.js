const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('This is the first middleware function');
//     next();
// })

// app.use((req, res, next) => {
//     console.log('This is the second middleware function');
//     res.send('<h1>This is the response</h1>')
// })

app.use('/users', (req, res, next) => {
    res.send('<h1>Users Page</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1>Root Page</h1>')
})


app.listen(3000);