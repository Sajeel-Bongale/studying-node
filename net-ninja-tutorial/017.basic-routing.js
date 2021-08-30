/*
    Link: https://www.youtube.com/watch?v=_zvWeGwVkCY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=19

    Currently when you set up a simple server using the http module, all the routes that you enter
    into the address bar will render the same page or response that you have set up in the
    call back function of the create server method.

    This is not very useful as we want the server to be able to do more that just send a simple
    response for any and every URL.

    The URL is available on the request object and we can use this to our advantage to
    send separate responses based on what URL is being accessed.

    So basically if the root(/) or home(/home) routes are being requested we can send,
    the index.html page. If other routes like /contact are requested we can send a different response.

    Finally, you can add a fallback route in the else clause to capture all the other routes.
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    if (request.url === '/home' || request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/015.index.html').pipe(response);
    } else if (request.url === '/contact') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/017.contact.html').pipe(response);
    } else if (request.url === '/api/ninjas') {
        const ninjas = [{
            name: 'Sam',
            job: 'Ninja',
            age: 20
        }];
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(ninjas));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/017.404.html').pipe(response);
    }
});

server.listen(8080, '127.0.0.1')