/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY&t=5669s

    Http module can be used to create servers.


 */

const http = require('http');

http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200);
    response.write('welcome to our homepage');
    response.end();
}).listen(8080);

