/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566276#learning-tools

    So far we have seen how to handle all incoming requests with the same handler. We have however not
    handled one request per route. We can do so by using the same use method that is provided by express.

    Express has 5 overloaded variations of the same use method. One such method allows you to add a route
    as a first parameter to the request and then provide a callback handler to handle that request.

    Express looks at the routes and  matches each request to the handlers which align with the specified
    path. This means that a path request for /product will also pass through the middleware set up for
    only /

    The path matching strategy by default is not exact.

    // first middleware that will always be called
    app.use("/", (req, res, next) {
        console.log('in the first middleware');
        next();
    });

    app.use("/product", (req, res, next) {
        console.log('in the product handler');
        res.send('<h1> This is product page </h1>'); // Sends product response back to user
    });

    app.use("/", (req, res, next) {
        console.log('in the handler for all other routes');
        res.send('<h1> This is generic page </h1>'); // Sends generic response back to user
    });


 */
