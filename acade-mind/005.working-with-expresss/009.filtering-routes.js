/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566302#learning-tools

    As we divided our pages earlier using express router, we may have some top level routes under which
    we nest other routes. For example the add product routes may be nested under admin like so:
    /admin/add-products

    We can add the /admin prefix to every route that we create in admin router file but there is a
    better way to handle it. We can simply add a route to the use middleware function when registering
    the router import in the app.js file

    So:
    app.use('/admin', adminRoutes);

    Now, you will not need to add the /admin prefix in the adminRoutes file each time you register a router.

 */
