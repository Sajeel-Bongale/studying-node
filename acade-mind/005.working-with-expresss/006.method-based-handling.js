/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566290#learning-tools

    We can restrict access to request handlers based on the method of the request.

    When we use the use method, all the methods of any type (GET, POST, DELETE, etc.) will be handled
    by the same handler. This can cause issues when you want to create request handlers for the same
    route but handle different types of requests for operations like CRUD.

    Express provides the ability to do this, simply by replacing the use method with the name of the
    method you want run the handler for.

    For POST requests:
    app.post('/product', (req, res, next) => {})

    For GET requests:
    app.get('/product', (req, res, next) => {})

    and so on...


 */
