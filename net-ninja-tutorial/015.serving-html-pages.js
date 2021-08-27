/*
    Link: https://www.youtube.com/watch?v=BBOUfdUZIVo&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=17

    In the real world you will not send plain text as response. Instead you will mostly send
    HTML pages.

    To do that you can improve your server to serve these pages instead of plain text content.

    All you need to change from the previous tutorial is the content type header to 'text/html'
    from 'text/plain' and change the name of the file being read by the read stream to the
    html file that you want the user to see.
 */

const http = require('http')
const fs = require("fs");

var server = http.createServer(function (request, response) {
    const myReadStream = fs.createReadStream(__dirname + '/015.index.html', 'utf8');
    // you don't need a write stream here as the response object acts as the write stream
    response.writeHead(200, {'Content-Type': 'text/html'});
    myReadStream.pipe(response);
});

server.listen(8080, '127.0.0.1')
console.log('Server ready to listen... ')

// Go to http://localhost:8080/ to see the response