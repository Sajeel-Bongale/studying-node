/*
    Link: https://www.youtube.com/watch?v=9TSBKO59u0Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=23

    Express is one of the most popular package on npm.

    It provides easy and flexible routing system.

    It integrates with many templating engines.

    Contains a middleware framework

    To use express, install it using npm and then require it in your program.

    Express returns a function which you can call to create the app. You will need to run
    the listen method on the app with a port number to start the server.

    This express app provides us the ability to listen to different types of requests such as
    GET, POST, etc and respond to them.

    To use these methods simply call the get(), post(), delete(), etc methods on the app object.
    The methods take a path as the first argument and a callback function as the second
    argument in which the request and response objects are received implicitly.

    You can send a response using the send method on the response object by passing it the data
    to be transferred. You do not have to specify the content type as express figures it out
    by itself.
 */

const express = require('express')

const app = express();

app.get('/', function (request, response) {
    response.send("This is the homepage");
});

app.get('/contact', function (request, response) {
    response.send("This is the contact page");
});

app.listen(8080)

// You will need to globally install nodemon using npm
// Run nodemon net-ninja-tutorial/018.introduction-to-express.js
// Go to localhost:8080 and you will see that the server responds with the response string