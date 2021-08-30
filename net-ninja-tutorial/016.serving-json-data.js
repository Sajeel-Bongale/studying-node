/*
    Link: https://www.youtube.com/watch?v=QxjVZFa1XUM&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

    To send data back as JSON we need to change the headers in the response object to Content-Type
    with value application/json.

    Also when completing the response, we cannot pass a JS object to the end method because it
    expects a stream. We therefore need to serialize this object into JSON format.

    To do that use the JSON.stringify method.

    You can verify this in the network tab of the browser.


 */

const http = require('http');
const fs = require('fs');

const myServer = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'})
    const myObject = {
        name: 'Sam',
        job: 'Ninja',
        age: 20
    }
    response.end(JSON.stringify(myObject))
});

myServer.listen(8080, '127.0.0.1')