/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=10138s
    Github: https://github.com/Sajeel-Bongale/task-manager

    The 500 errors have been handler using the error handler middleware.
    However, the 404 errors still have the same code repeated in the controllers.

    To handle those, we will now create a custom error handler class that will churn out error
    objects extended for the parent native Error class in JS.

    We will write a simple class and a factory method that creates objects for this class.

    When we need to create an error object, for example when the search returns 404, we will
    simply call the factory method to generate an error object for us that we will pass on
    to the next handler.

    Inside the error handler, we will determine if the error is an instance of the particular
    custom class that we created, if yes, then we will show the error based on the properties that
    the error object came along with, else we will show the default, something went wrong error
    and return a 500 response object.


 */