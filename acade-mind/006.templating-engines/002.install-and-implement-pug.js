/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577394#questions


    //npm i --save pug ejs express-handlebars

    To install pug we do npm i --sav pug

    Once installed we need to tell our express application that there now exists a templating engine in the
    node modules that we wish to use.

    NOTE: All the above mentioned packages are compatible with express by default. No additional setup is
    needed to make the packages work with express, just the app.set method call is needed. This would not be the
    case when working with vanilla NodeJS as templating engines would need additional configuration and setup.

    We do:
    app.set('view engine', 'pug');
    app.set allows you to define global configuration across your express app. Certain keywords like the view engine
    are reserved and understood by express. Other custom properties are also acceptable and will be accessible
    using app.get method by passing the property name. NodeJS automatically finds and binds the pug templating
    engine to the app as it is set using the view engine reserved property keyword.

    We can also set the views property on the express app. This property sets the folder location from within which
    express will look for templates to pick up. views is the default value for this property. This means that
    if you have a views folder with the templates in it you do not need to set this property but it does not hurt
    to be explicit.

    Inside the views file we create a new file with the extension pug.
    The pug template differs from regular HTML and it has a separate syntax. Your IDE may help you with
    creating/transferring to pug files from HTML.

    When the time for delivering the response arrives, the express application combines data from the application,
    adds it in the templates and creates an HTML document to send to the client.

    The shop.pug file looks like
    <!DOCTYPE html>
    html(lang="en")
        head
            meta(charset="UTF-8")
            meta(name="viewport", content="width=device-width, initial-scale=1.0")
            meta(http-equiv="X-UA-Compatible", content="ie=edge")
            title My Shop
            link(rel="stylesheet", href="/css/main.css")
            link(rel="stylesheet", href="/css/product.css")
        body
            header.main-header
                nav.main-header__nav
                    ul.main-header__item-list
                        li.main-header__item
                            a.active(href="/") Shop
                        li.main-header__item
                            a(href="/admin/add-product") Add Product


    Finally once the template is complete, we need to tell our controller(which was earlier sending responses
    as HTML files using the sendFile method) that we no longer want to send HTML files, but we want to send
    templates. To do so we call the render method instead of the sendFile method.

    res.render('shop')

    We do not need to provide any path since we have already set that up using the set method at the beginning.
    We also do not need to add the .pug extension as the view engine property takes care of that.


 */