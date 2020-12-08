const routeHandler = (req, res) => {
    console.log('server started')
    const { url, method } = req;
    console.log(url, method)
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            // every chunk in the body is the Buffer format which can concat together
            // only when user input is text 
            const data = Buffer.concat(body).toString();
            const username = data.split('=')[1];
            console.log(username)
        })
        // setHeader redirection needs to combine with status code
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>')
        res.write('<ul><li>User 1</li></ul>')
        res.write('</html>')
        // use return here is to avoid code keep execute, and after res.end(); res.write() and so on should not be called
        return res.end()
    }
    if (url === '/') {
        res.write('<html>')
        res.write('<h1>Hello! Greatings from Notail.</h1>')
        // post method in the form need to be specified, get is the default method
        res.write("<form action='/create-user' method='post'><input name='username'/><button>Submit</button>")
        res.write('</html>')
        return res.end()
    }

    // default routes
}

// module.exports.routeHandler = routeHandler;
// module.exports = routeHandler;
exports.routeHandler = routeHandler;
// console.log('module: ', module)

