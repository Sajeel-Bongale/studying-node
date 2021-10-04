/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=3774s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    If you observe the logs, you will notice that the server starts first and then the database connection succeeds.

    In an instance where the database connection fails, we will not be able to perform any operations and thus
    setting up the server will be redundant.

    So it makes more sense to have the connection to the database successfully made, even before we start the
    server and listen for requests.
    If the connection fails we can simply throw an error and fail the startup.

    For this you will need to create a wrapper function over the connect method and export it.
    In the wrapper function you will return the result of the connect method (which is a promise),
    which will be consumed in the calling module.

    Then, in the app js we will require the above exported module where we will call the connectDB
    method and if it succeeds, we will call the method to start and listen for the server.
    Else we will simply shut down the application.

    If after making the changes we call the required method, and everything is successful, the server
    will start once the connection to the database has been made.

 */