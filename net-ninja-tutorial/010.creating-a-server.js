/*
    Link: https://www.youtube.com/watch?v=lm86czWdrk0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=13

    How to create a server and respond to requests?

    We will need to use a core module provided by NodeJS called http. See example 1

    To create a server we use a method that is provided on this module called createServer.
    It takes a function as a callback with the request and response as its parameters.

    Whenever the server receives a request, it fires this callback method.

    When we make a request to a server and when we respond to them with some data or
    information we also respond with headers and on the request we can send request headers.

    You can think of headers as extra information about the request or the response.

    Among the headers are Content-Type (Tells the browser what type of content is in the response),
    Status(Tells us whether the response was successful or failed) which provide more information
    about the request or response being sent.

    Some headers are exclusively request headers and some are exclusively response headers.
    While some are common to both.

    To set headers in the response use the writeHead method on the response object.

    To end the response and send it back to the client you can use the end method.

    Now doing only this will not work because we have to set up the server to listen on a port.
    To do that we use the method listen and pass it the port and address.

    One issue with this is that the server is very minimalistic. All the requests sent to this
    address or any path on this address will always respond with the same content.

    This is not very helpful. There are ways to tackle this problem which will be shown later.

    You can also use the request object to find more information about the incoming requests.
 */

// Example 1
var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hey there. How's it going?");
});

server.listen(8080, '127.0.0.1')
console.log('Server ready to listen... ')

// go to http://127.0.0.1:8080/ to see the response