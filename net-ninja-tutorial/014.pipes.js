/*
    Link: https://www.youtube.com/watch?v=a8W90jDHSho&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=25

    In the previous sections we saw how to read and write data to and from files using stream methods
    on the fs core module.

    This activity is very common and therefore, NodeJS provides a direct way to achieve both tasks
    in one go. It is known as pipes.

    A pipe helps us to take data from a read stream and pass it onto a write stream. With this we
    don't have to manually read and write from the files.

    We still need a read and write stream, the difference is that you can simply use the pipe method
    on the read stream and pass the data on to the write stream without listening for events.

    This makes the code more elegant.

    Example 1 shows a more practical use case for pipes
    We can send data as a response using pipes which is demonstrated in the example.

    When you pipe the response to the response object, it behaves as a write stream.
    When the read stream data is finished sending chunks, it automatically closes
    the response object and finishes its execution. Till the time the data is being
    sent, the connection remains open.

 */

const fs = require('fs')
const http = require('http')

const myReadStream = fs.createReadStream(__dirname + '/012.readstream.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/013.writestream.txt', 'utf8');

myReadStream.pipe(myWriteStream)

// Example 1
var server = http.createServer(function (request, response) {
    const myReadStream = fs.createReadStream(__dirname + '/012.readstream.txt', 'utf8');
    // you don't need a write stream here as the response object acts as the write stream
    response.writeHead(200, {'Content-Type': 'text/plain'});
    myReadStream.pipe(response);
});

server.listen(8080, '127.0.0.1')
console.log('Server ready to listen... ')

// Go to http://localhost:8080/ to see the response