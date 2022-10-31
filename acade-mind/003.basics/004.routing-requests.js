/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561894#overview

    So far we have only seen or captured the request in a single handler without looking at the path. In real
    world applications we need to perform different tasks as per the route on which the request has been generated.

    This is known as routing.

    We can start with a simple route of only / or basically nothing in the url after the domain name.

    We can handle such a request by making use of the url property in the request object.

    Every request that is /  will have the text This is the landing page and any other request such as
    /test or /everything-else will have the page This is the default page served for them

    NOTE: It is mandatory to write the return in the if block, not because res.end needs it, but so that
    the content after the if ends is not executed. The return does not return the response.

 */

const http = require('http');
let server = http.createServer(((req, res) => {
    if (req.url === "/") {  // Route handling
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first NodeJS App</title></head>');
        res.write('<body><h1>This is the landing page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first NodeJS App</title></head>');
    res.write('<body><h1>This is the default page</h1></body>');
    res.write('</html>');
    res.end(); // ends and sends the response, you cannot add any more information after calling end
}));
server.listen(3000);
