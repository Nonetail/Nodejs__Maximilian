const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    // default form action will take all the input data, and put it into request body as key value pairs
    // name attr as key(message), value as what user entered {message: 'some input'}
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // the incoming data is sent as a stream of data, we can listen on the data(built-in) event
    // the 'data' event will be fired whenever a chunk of data is ready to be read
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // 'end' event will be fired once we done parsing the incoming data
    req.on('end', () => {
      // Buffer object give us a way to interact with chunk data
      // toString will only work because we know the incoming data would be text in this case
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
