/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561900#overview

    When handling a POST request we may want to process the incoming data.

    In a request that NodeJS receives, the data is sent in the form of a stream. NodeJS sends data by default in
    the form of chunks on this stream.

    To get access to these chunks of data we need to be able to listen for them.

    Then once we are able to listen to them we need to pick these chunks up and put them in a buffer. A buffer is
    nothing but a temporary data storage area, just like a bucket used to store water.

    You can add and remove chunks into the buffer as the data is being transferred on the stream. Then we can use
    these chunks to extract the real data as originally it appears as garbled text. The buffer makes it easy for
    us to read and process it.

 */

const http = require('http');
const fs = require('fs');
let server = http.createServer(((req, res) => {

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

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first NodeJS App</title></head>');
    res.write('<body><h1>Hello from NodeJS</h1></body>');
    res.write('</html>');
    res.end(); // ends and sends the response, you cannot add any more information after calling end
}));
server.listen(3000);
