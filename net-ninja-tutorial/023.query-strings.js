/*
    Link: https://www.youtube.com/watch?v=QTAYRmMsVCI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=30

    A query string is additional information that is requested from the URL. It follows the ? symbol
    and is written in key=value format. If there are multiple query params needed, we separate them
    using ampersands (&)

    One use case is for requesting a page number on a website.

    To get access to these query strings that are passed in the URL, you need to look into
    the request object. This is similar to route params. The property is called query.

    We can pass the data being received from the query string into the views using the render method.

 */


const express = require('express')

const app = express();

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'));


app.get('/', function (request, response) {
    response.render('023-index');
});

app.get('/contact', function (request, response) {
    response.render('023-contact', { data: request.query });
});

app.get('/profile/:name', function (request, response) {
    const data = {
        age: 29,
        job: 'Ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    }
    response.render('023-profile', { person: request.params.name, data });
});


app.listen(8080)

