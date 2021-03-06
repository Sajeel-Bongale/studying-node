/*
    Link: https://www.youtube.com/watch?v=MuMs1pLuT7I&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=24

    So far we have seen routes that are static in nature.

    To tackle dynamic routes such as /profile/:id, you need to use something called route params.

    The parameters passed through to the URL are available on the request object on the params
    property. You can request the param by specifying the name of the property(id).
 */

// You will need to globally install nodemon using npm
// Run nodemon net-ninja-tutorial/019.route-params.js
// Go to localhost:8080 to see the server running

const express = require('express')

const app = express();

app.get('/', function (request, response) {
    response.send("This is the homepage");
});

app.get('/contact', function (request, response) {
    response.send("This is the contact page");
});

app.get('/profile/:id', function (request, response) {
    response.send("You requested to see the profile with the id of: " + request.params.id);
});

app.listen(8080)

// You will need to globally install nodemon using npm
// Run nodemon net-ninja-tutorial/019.route-params.js
// Go to localhost:8080 to see the server running