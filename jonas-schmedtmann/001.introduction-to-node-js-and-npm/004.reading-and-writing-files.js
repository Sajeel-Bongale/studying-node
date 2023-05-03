/*

    Reading and writing files

    To read the data in a particular file we can use the fs module. In fs module we use the readFileSync method which
    processes the file in a asynchronous way. -> example 1

    To add a file along with the text we use the following steps -> example 2

    example 1
    const fs = require("fs");

    const result = fs.readFileSync("./text/fruits.js", "utf-8");
    console.log(result);

    example 2
    const fs = require("fs");

    fs.writeFileSync("./FilePath", "Content To write in the file");

 */