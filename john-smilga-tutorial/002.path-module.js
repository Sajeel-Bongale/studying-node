/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY&t=3853s

    The path module lets you find properties like the platform separator.

    You can pass it a path and call join on it to get a normalized path.

    To find the name of the file from a path, you can use the basename method.

    To get the absolute path, you use the resolve method.

 */

const path = require('path')

console.log(path.sep); // prints \

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath); // \content\subfolder\test.txt


const baseName = path.basename(filePath);
console.log(baseName); // prints test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // prints Z:\Projects\Practice\node\studying-node\john-smilga-tutorial\content\subfolder\test.txt

