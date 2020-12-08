const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    // we should set up the header type before sending the request
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    // better practice to have type='text' on input form
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  // Send a HTML response with some "Page not found text
  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      // parsedBody is the good naming convention
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(3000);
