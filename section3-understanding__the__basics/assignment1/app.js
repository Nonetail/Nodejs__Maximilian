const http = require('http');

// when importing from other local files(modules), name here is arbitrary
const { routeHandler } = require('./routes');
// console.log('routeHandler: ', routeHandler);

const server = http.createServer(routeHandler);

server.listen(3000);