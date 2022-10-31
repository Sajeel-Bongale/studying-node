/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566300#learning-tools

    We may have a limited number of routes in our application. For all other routes we may want to display
    some message like page not found or a generic 404 page. This is almost always the use case for all
    applications.

    To add a 404 like error handling request it is advisable to add a new middleware at the end of the
    middleware chain so that once all route checks have failed we can show the user an error not found page.

    To do so we add the new middleware using the app.use method. This method will cover all HTTP verbs.

    At the end of the middleware chain
    app.use((req, res, next) => {
        res.status(404).send('<h1>Page Not Found</h1>');    <- You can add your custom status using the staus method
    })

 */
