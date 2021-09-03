/*
    Link: https://www.youtube.com/watch?v=-lRgL9kj_h0&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=28

    If you remove all the styles from the index.ejs file and put it into a separate css file in the assets
    directory, and then run the app, the file is not loaded.

    This is because the app is now being managed by express and it treats all stylesheet requests like it does
    for regular url route requests.

    What we need is a way to deal with serving these static files which are not particularly related to
    the routes that we made in the express app.

    To solve this problem, we use middleware.

    Middleware is essentially code that runs between the request and the response. It is simply code
    that's in the middle.

    There is some baked in middleware that comes along with express. To use it call the use method on the app.
    To it pass a route for when the middleware should be triggered and a callback that executes your code.

    The use method has 3 implicit parameters, request, response, next. The first two are the same as before,
    next is used to move to the next middleware handler in the chain. It is a function.

    Any match with the mentioned path argument in use with the URL from the browser triggers the middleware.

    Since express comes with its own middleware, we don't have to write the callback function ourselves.

    We can simply use the express.static method to specify where our static files reside.

    The folders can be named anything. They don't always have to be called assets.
 */

const express = require('express')

const app = express();

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'));


app.get('/', function (request, response) {
    response.render('index');
});

app.get('/contact', function (request, response) {
    response.render('contact');
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

