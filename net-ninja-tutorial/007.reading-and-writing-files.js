/*
    Link: https://www.youtube.com/watch?v=U57kU311-nE&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=9

    NodeJS allows you to read and write files from the computer.
    This can be done using Node's core module called fs.

    It provides a lot of functionality but the most important one is reading and
    writing files.

    See example 1 on how to read a file.

    The readFileSync method synchronously reads file data from the file specified as the
    first argument. It takes an options object with the encoding property set to match
    that of the data content that is being received. All the content that is read is then
    stored in a variable and output to the console.

    We can also write the content we read from the file into another file using fs.
    We simply use the writeFileSync method for this.

    This method takes the path of the file to be created as well as the content that needs
    to be written to the file.

    Note that both these methods are synchronous.

    There are asynchronous methods available on fs which we will see in example 2
    readFile for reading and writeFile for writing data. Both these methods take
    a callback function that runs when the reading/writing of the file is complete.
    This helps to prevent blocking of the code when the content in the file can
    be large.

    Prefer using the asynchronous methods for reading and writing files.
 */

var fs = require('fs');

// Example 1
var readme = fs.readFileSync(__dirname + '/readme.txt', {
    encoding: 'utf-8'
}); // this is a synchronous method

fs.writeFileSync(__dirname + '/writeme.txt', readme, {encoding: 'utf-8'});

// Example 2

fs.readFile(__dirname + '/readasync.txt', (err, data) => {
    fs.writeFile(__dirname + '/writeasync.txt', data, () => {});
});
