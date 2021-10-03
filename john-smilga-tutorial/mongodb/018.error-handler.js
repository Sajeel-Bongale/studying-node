/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=9781s
    Github: https://github.com/Sajeel-Bongale/task-manager

    As of now the error handler in async.js simply calls the next with the error object.

    Since we have not mentioned any middleware that should run after our async middleware, calling
    next on error will simply trigger Express' default handler.

    That is why you get an HTML page with some text explaining the error even though you have
    not added code for it.

    We will, however, write our own middleware to handle errors.

    We create a new file that has a middleware function. The difference is that
    since we are creating an error handler, the first argument received by this function
    is error.

    NOTE: The error handler middleware is identified as an error handler middleware by the fact that
    it has 4 arguments instead of the usual 3(req, res, next). The fourth argument is the error object.
    Calling the next method with a parameter implies that you want the next error handler to be executed
    with the error object passed as the argument.

    You can have more complex use cases using these error handlers which will be explored in later projects.

 */