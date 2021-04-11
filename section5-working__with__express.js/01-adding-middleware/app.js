const http = require('http');

const express = require('express');

const app = express();

//NOTE: use allows use to add a middleware 
app.use((req, res, next) => {
    console.log('In the middleware!');
    //NOTE: allows the request to continue to the next middleware or the request dies
    next(); 
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    //NOTE: express way to send back res, content type in header is set automatically
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
