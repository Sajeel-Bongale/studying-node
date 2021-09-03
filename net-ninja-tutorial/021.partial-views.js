/*
    Link: youtube.com/watch?v=CdvSVkF9m_Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=29

    In enterprise applications you would usually need several pages to make your app work.
    Example you may need pages for the profile, contact, about, home etc.

    Now across all these views there will always be elements that are common in each of them.
    Such as navigation.

    This is the perfect use case for partial views where you make a common view and inject it
    into every view that needs this partial template. As mentioned above navigation will be
    needed in most pages.

    Partial views help to reuse code.

    To create partial views you add a sub folder to the views folder called partials.

    To add them to your pages you use the <%- %> syntax with the include keyword

    Finally we can create views for every page and make the app render them from the
    views folder. Replace the index and contact page and include the nav ejs partial
    in each of these files.
 */

const express = require('express')

const app = express();

app.set('view engine', 'ejs')


app.get('/', function (request, response) {
    response.render('021-index');
});

app.get('/contact', function (request, response) {
    response.render('021-contact');
});

app.get('/profile/:name', function (request, response) {
    const data = {
        age: 29,
        job: 'Ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    }
    response.render('021-profile', { person: request.params.name, data });
});


app.listen(8080)