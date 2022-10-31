/*

    Creating an HTTP server and request and response objects
    const http = require('http');
    let server = http.createServer((req, res) => {
        console.log(req.url, req.method, req.headers);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first NodeJS App</title></head>');
        res.write('<body><h1>Hello from NodeJS</h1></body>');
        res.write('</html>');
        res.end(); // ends and sends the response, you cannot add any more information after calling end
    });
    server.listen(3000);


    Routing requests
    let server = http.createServer((req, res) => {
        if(req.url === "/") { // process / request here }
        else if(req.url === "/test") { // process /test request here }
        else { // process all other requests here }
    }


    Redirecting requests
    let server = http.createServer((req, res) => {
        if(req.url === "/message") {
            // do some processing
            res.statusCode = 302; // 302 is status code for redirects
            res.setHeader('Location', '/');
            return res.end();
        }
    }


    Parsing request body
    if (req.url === "/message" && req.method === "POST") {
        const body = [];
        // this handler fires every time a new chunk is received on the stream
        req.on('data', chunk => {
            console.log(chunk); // writes garbled data that we cannot understand
            body.push(chunk);
        });

        // listener for end called when all data chunks have been received
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); // this content is now readable
            fs.writeFileSync('message', parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

 */
