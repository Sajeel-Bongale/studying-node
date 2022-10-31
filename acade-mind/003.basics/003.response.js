/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561892#overview

    Just like the request object we also get the response object in the createServer callback. In
    this object is not much information but you can add anything that you want to send back to the user.

    For instance we may want to send an HTML page back as a response. We will therefore, need to type
    out the page in the response and then send it back.

    We can also attach response headers before sending the object back.

 */


const http = require('http');
let server = http.createServer(((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first NodeJS App</title></head>');
    res.write('<body><h1>Hello from NodeJS</h1></body>');
    res.write('</html>');
    res.end(); // ends and sends the response, you cannot add any more information after calling end
}));
server.listen(3000);