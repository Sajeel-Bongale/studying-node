/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566256#overview

    Express uses a feature called middleware. It allows you to run a piece of code and manipulate a received
    request in the middleware function.

    The signature of the middleware function is like so:
    (req, res, next) {}

    It is similar to a normal NodeJS createServer handler function but with one addition of a next parameter as
    the third argument in the list.
    The next method allows the current middleware to hand over execution of the request to the next middleware
    in the chain. It is important to call the next method if you are not ending the request with a response as
    the request will remain in that state otherwise and time out.

    To end a response and send it back to the user, we can call the res.send method. You can send any kind of
    response using this method. Express automatically infers the type of data being sent in the response and
    add the correct headers to the response.

    To use middleware do this:
    const http = require('http');
    const express = require('express');
    const app = express();

    // use is used to attach or register a middleware function
    app.use((req, res, next) {
        console.log('in the first middleware');
        next(); // will call the next middleware in the chain
    });

    // Chaining second middleware here
    app.use((req, res, next) {
        console.log('in the second middleware');
        res.send('<h1> Hi from express </h1>'); // Sends response back to user
    });

    http.createServer(app);

 */
