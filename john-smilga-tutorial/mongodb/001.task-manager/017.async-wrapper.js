/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=9184s
    Github: https://github.com/Sajeel-Bongale/task-manager

    So far we have written our controller functions with each of them being wrapped around a try/catch block.
    This is rather repetitive and if possible should be avoided.

    Even the catch handlers have nearly the same code.

    A better way of dealing with this is to use middleware.

    There are npm packages that do this for us, but for the task manager project we will manually create
    the middlewares so that we understand what is happening behind the scenes in them too.

    The idea is to create a middleware function and wrap all our controller method inside this function
    This function should, in fact be called by passing our controller logic to it as a parameter.

    The middleware function then returns an async function, to which all the req, res, and next arguments
    will be supplied by the express handlers. The difference now, is that our controller function logic
    is now output being wrapped inside the try catch block.

    These are the steps that take place:
    1. The controller method (getAllTasks) is instantiated. It is assigned to a direct function call
    (asyncWrapper call) which takes the function (logic) as an argument (do not look at params right now).
    2. The asyncWrapper returns a new function (reference) which has all you logic, but it is now
    wrapped inside a try/catch block.
    3. This function reference gets its implicit arguments(req, res, and next) supplied to it by express
    and the function logic can now run properly with the correct params supplied to it at call time.

    The error part will be handled in the next section

 */