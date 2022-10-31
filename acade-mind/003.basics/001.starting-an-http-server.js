/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561888#overview

    To exit a listening process you can call the exit method on the process object.

    If you want to exit the running process from a terminal press CTRL + C
 */


const http = require('http');
let server = http.createServer(((req, res) => {
    console.log(req);
    // process.exit();     // exits the running node process - hard exit
}));
server.listen(3000);