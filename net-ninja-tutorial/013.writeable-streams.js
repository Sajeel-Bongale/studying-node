/*
    Link: https://www.youtube.com/watch?v=DvlCT0N7yQI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=15

    To create a write stream you use the createWriteStream

    Now using the previous example, we will read the data from a large file and then
    write it to a new file using the write method on our newly created write stream.

    So every time a new chunk becomes available on the read stream we can write it
    on to a separate file that we will create.

    Streams help to start transfer of data without having to wait for the entire file
    contents to be put into memory.
 */

const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/012.readstream.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/013.writestream.txt', 'utf8');

myReadStream.on('data', function (chunk) {
    myWriteStream.write(chunk);
});
