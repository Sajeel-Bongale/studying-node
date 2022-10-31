/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561896#overview

    Sometimes we may want to redirect the user to a different page after a certain request has been completed. For
    example after filling out a form the user may need to be redirected to a success or error page.

    To do so we can set redirection headers on the response and mention where the response should navigate to
    once it has been processed.

 */


const http = require('http');
let server = http.createServer(((req, res) => {
    if(req.url === "/message") {
        // do some processing
        res.statusCode = 302; // 302 is status code for redirects
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first NodeJS App</title></head>');
    res.write('<body><h1>Hello from NodeJS</h1></body>');
    res.write('</html>');
    res.end(); // ends and sends the response, you cannot add any more information after calling end
}));
server.listen(3000);
