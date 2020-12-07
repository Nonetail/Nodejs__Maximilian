
// built-in module from Node.js
const http = require('http');
const fs = require('fs');

// create a server object
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  // native node.js way to handle routing
  if (url === '/message' && method === 'POST') {
    // dummty text here can be a huge file, so it may block the code
    fs.writeFileSync('message.txt', 'DUMMY');
    // way to set status code, default statusCode is 200
    // 302 Found stands for redirection
    res.statusCode = 302;
    // default browser behaviour, set Location in response header to redirect
    res.setHeader('Location', '/');
    // return is important here or other routes will be executed
    return res.end();
  }
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

// activates this server, server object listens on port 3000;
server.listen(3000);
