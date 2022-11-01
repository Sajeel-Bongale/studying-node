/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577414#questions

    Install this version of handlebars
    npm install --save express-handlebars@3.0

    Adding handlebars is slightly different from pug. We need a couple of additional steps.

    We import handlebars by requiring express-handlers

    const expressHbs = require('express-handlebars');

    const app = express();

    app.engine('handlebars', expressHbs());<- You can choose any name for your engine. It does not have to be handlebars
                                                it can be hbs too. But then you need to keep the same value consistent
                                                when setting up the view engine and creating template file extensions.
    app.set('view engine', 'handlebars');
    app.set('view', 'views');

    Then in your views folder you create a file with .handlebars extension which looks like a regular HTML file
    but uses {{ }} syntax to inject dynamic content in the file.

    Remember that the way you pass in the data from the render method remains the same across all templating
    engines. Only the syntax for building the HTML template differs from engine to engine.
    res.render('shop', { prods: products,  pageTitle: 'Shop', path: '' });

 */