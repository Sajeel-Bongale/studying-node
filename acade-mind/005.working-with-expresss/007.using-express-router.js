/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566296#learning-tools

    Express itself allows the use of a router that it provides. Using this router you can write cleaner code.
    You can keep your routes divided over separate files.

    To achieve this create a routes folder and add the type of route you want under a unique file like admin routes
    goes in admin.js file. For users you can create a new users.js file that hold the routes.

    In this file you use the express.Router() and then to this router attach the routes you want. After adding
    the routes you want to export the router variable as you have now registered routes on it.

    Finally in the main app.js file you import all your route files and attach them to the main express app
    variable as middleware.

    Remember that the order of registering the middleware is still important

    In admin.js
    const express = require('express');
    const router = express.Router();

    router.get('/add-product', (req, res, next) => {});
    router.post('/product', (req, res, next) => {});

    module.exports = router;

    In app.js
    const express = require('express');
    const adminRoutes = require('./routes/admin');
    const app = express();
    app.use(adminRoutes);

    NOTE: The use method does not perform an exact match and will there match any request that has the same route
    partially in it. However, get and post methods will perform an exact match and therefore are safer from coding
    standards perspectives as only the mentioned routes will be correctly matched.

 */


