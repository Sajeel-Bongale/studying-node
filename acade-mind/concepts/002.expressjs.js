/*

    Installing Express
    npm i express --save


    Using express
    const http = require('http');
    const express = require('express');
    const app = express();  // make function call
    http.createServer(app);


    Chaining middlewares and Sending a response
    const http = require('http');
    const express = require('express');
    const app = express();
    // use method is used to attach or register a middleware function
    app.use((req, res, next) {
        console.log('in the first middleware');
        next(); // will call the next middleware in the chain
    });
    // Chaining second middleware here
    app.use((req, res, next) {
        console.log('in the second middleware');
        res.send('<h1> Hi from express </h1>'); // Sends response back to user
    });
    http.createServer(app);


    Handling routes using express
    app.use("/product", (req, res, next) {
        res.send('<h1> This is product page </h1>'); // Sends product response back to user
    });


    Parsing request bodies
    const bodyParser = require('body-parser');
    // Add this as the very first middleware in the chain
    app.use(bodyParser.urlencoded({extended: false}));


    Method based request handling
    For POST requests:
    app.post('/product', (req, res, next) => {})
    For GET requests:
    app.get('/product', (req, res, next) => {})


    Using Express router
    In admin.js
    const express = require('express');
    const router = express.Router();
    router.get('/add-product', (req, res, next) => {});
    router.post('/add-product', (req, res, next) => {});
    module.exports = router;

    In app.js
    const express = require('express');
    const adminRoutes = require('./routes/admin');
    const app = express();
    app.use(adminRoutes);


    Handling 404 Routes
    // At the end of the middleware chain
    app.use((req, res, next) => {
        res.status(404).send('<h1>Page Not Found</h1>');    <- You can add your custom status using the status method
    })


    Filtering routes using same prefix
    app.use('/admin', adminRoutes); <- Makes /admin as prefix for every route in adminRoutes, eg /admin/add-product


    Utility to get absolute project path
    // Add this code to a util file
    module.exports = path.dirname(process.mainModule.filename);


    Serving static content other than HTML
    // Add a middleware at the beginning registering source for static content
    app.use(express.static(path.join(__dirname, 'public')));
    // In any HTML file that gets served as a response
    <link rel="stylesheet" href="/css/main.css" />  <- Will look for main.css in {root}/public/css folder


 */
