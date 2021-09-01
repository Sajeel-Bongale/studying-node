/*
    Link: https://www.youtube.com/watch?v=oZGmHNZv7Sc&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=25

    So far we have only sent back strings using the express app.

    We can also send an HTML page back. To achieve that we use the sendFile method.
    By specifying the path to the file, we can simply push it to the client.

    These files are, however, static in nature and more often than not we require to
    generate and send dynamic content (example data from a database).

    This is where template engines come in handy. Using them we can inject dynamic content
    into an HTML file and send it across to the client.

    There are several templating engines available for using with express. We will use EJS.

    To make Node understand that we will be using a template engine we have to explicitly state it.
    Use the set method on the express app to do so.

    Then you specify your EJS views in a views folder at the root of the project. Express knows
    to look into this default folder when view engine has been set.

    You use the render method on the response object and pass it the newly created ejs file in the
    views folder. (See views/profile.ejs)

    For dynamic content injection we pass a second parameter to the render method which gets
    passed into the view as properties. To access those properties we use <%= variableName %>
    syntax in the EJS files. You can pass objects inside the object property too.

    Dynamic content can contain arrays, objects, etc

    When you want to inject JS inside the EJS files you simply write the JS code inside the <% %>
    Notice this is without the = sign. You use the = sign only when you want to attach a variable
    value inside the template. Without it you are asking EJS to read it like simple JS code.
 */


const express = require('express')

const app = express();

app.set('view engine', 'ejs')

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/015.index.html');
});

app.get('/contact', function (request, response) {
    response.sendFile(__dirname + '/017.contact.html');
});

app.get('/profile/:name', function (request, response) {
    const data = {
        age: 29,
        job: 'Ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    }
    response.render('profile', { person: request.params.name, data });
});


app.listen(8080)