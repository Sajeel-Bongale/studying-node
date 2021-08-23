/*
    Link: https://www.youtube.com/watch?v=Ejgd-la6nSY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=10

    You can delete files using the unlink method on the fs module. See example 1
    You need to pass the correct path of the file to the method and then it deletes it.
    A callback also needs to be passed as the second argument.

    NodeJS allows you to create and remove directories just like it allows you to read and write files.

    Again, there are both synchronous and asynchronous methods available.

    The synchronous methods are shown in example 2
    They are mkdirSync and rmdirSync, they both take the path and a callback function as the first and
    second parameter respectively.

    The asynchronous couterparts are mkdir and rmdir. These too, take callback functions.
    You cannot remove directories that have files in them. Node will throw an error when trying to
    rmdir such a directory. To clear the directory, use the unlink method as mentioned above.

 */

var fs = require('fs')

// Example 1
/*
Uncomment to run unlink - file deletion
fs.unlink(__dirname + '/007.writeme.txt', () => {
    console.log('Successfully deleted file')
})
*/

// Example 2
fs.mkdirSync(__dirname + '/myfolder', () => {}) // creates directory
fs.rmdirSync(__dirname + '/myfolder', () => {}) // deletes directory