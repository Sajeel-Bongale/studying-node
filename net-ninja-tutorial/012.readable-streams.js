/*
    Link: https://www.youtube.com/watch?v=E3tTzx0Qoj0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=14

    Writable streams allow NodeJS to write data to streams.

    Readable streams allow NodeJS to write data to streams.

    Duplex streams can do both.

    When sending data to a client from a NodeJS server you can use the writeable stream
    to pass data onto the stream which will be received by the client.

    Similarly when NodeJS server wishes to read data that is being sent by the client it
    can create a readable stream to do so.

    To read a file using the read stream you use the method createReadStream on the fs module.

    To listen to updates on the read stream we need to set up a listener that triggers that
    triggers when a chunk(buffer) of data is available to read. The event to listen is data.

    When you run the below code, you see that two chunks of data are being received as the file
    being read is very large. Two consoles for each of the data are logged.

    You can add the utf8 encoding param to read the content as plain text.

    You can compare streams to the previous way we learned to read data in section 007.
    In the asynchronous and synchronous methods we wait for the entire file/data to be loaded
    and only then fire the callback function.

    However with streams listeners fire every time the buffer is filled up and some amount of
    content is ready to be passed on to the stream.
*/

const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/012.readstream.txt', 'utf8');

myReadStream.on('data', function (chunk) {
    console.log("New chunk received");
    console.log(chunk);
});
