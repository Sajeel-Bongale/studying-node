/*
    Link: https://www.youtube.com/watch?v=rin7gb9kdpk&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=30

    POST is a request method by way of which you can ask the server to store some data.

    To handle this, first we need to make a POST request from the client. For this we will use the
    form that we created in the contact ejs file. We need to make the method as POST on the form
    element and action to be the contact URL.

    We also need to handle the request on the server. So we need to create a POST handler for the
    contact route.

    To parse the incoming response we will need a dependency called body parser.
    This creates a middleware that you can use in the POST handler to parse the data.

    Once the middleware is included, it gives us access to the object on the request body.

    You can use this object to pass the data to a database or do any other computations.
 */

// You will need to globally install nodemon using npm
// Run nodemon net-ninja-tutorial/024-006.handling-post-requests.js
// Go to localhost:8080 to see the server running


const express = require('express');
const bodyParser = require('body-parser');

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'));


app.get('/', function (request, response) {
    response.render('024-index');
});

app.get('/contact', function (request, response) {
    response.render('024-contact', { data: request.query });
});


app.post('/contact', urlEncodedParser, function (request, response) {
    console.log(request.body);
    response.render('024-contact-success', { data: request.body });
});

app.get('/profile/:name', function (request, response) {
    const data = {
        age: 29,
        job: 'Ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    }
    response.render('024-profile', { person: request.params.name, data });
});


app.listen(8080)

// You will need to globally install nodemon using npm
// Run nodemon net-ninja-tutorial/024-006.handling-post-requests.js
// Go to localhost:8080 to see the server running