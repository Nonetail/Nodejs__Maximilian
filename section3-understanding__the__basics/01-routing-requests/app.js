
//NOTE: built-in module from Node.js
const http = require('http');
const fs = require('fs');

//NOTE: create a server object
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  //NOTE: native node.js way to handle routing
  if (url === '/message' && method === 'POST') {
    //NOTE: dummty text here can be a huge file, so it may block the code
    fs.writeFileSync('message.txt', 'DUMMY');
    //NOTE: way to set status code, default statusCode is 200
    //NOTE: 302 Found stands for redirection
    res.statusCode = 302;
    //GOOGLE: default browser behaviour, set Location in response header to redirect (together with 302 statusCode)
    res.setHeader('Location', '/');
    //NOTE: return is important here or other routes will be executed
    return res.end();
  }
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    //GOOGLE:  the native html form submission
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  //NOTE: native node.js to send response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

//NOTE: activates this server, server object listens on port 3000;
server.listen(3000);
