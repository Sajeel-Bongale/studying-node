/*
    Youtube Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=3383s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    The first thing that needs to be done is to set up a connection.

    For this we will require the mongoose package in the connect.js file under the db folder.

    Once required, we will call the connect method on the mongoose instance and pass to it,
    the connection string. We first need to add the correct user and password to the file.

    We also need to add the correct database name.

    The connect method returns a promise that can be thenned to get the success and caught
    for catching the error.

    Finally we need to make sure that this connect method is being called.

    To do that ensure that the connect module(file) is being required in the app.js.

    Since we have previously seen that requiring a module causes it to execute the code
    in it, the require statement in the app.js triggers a call to the connect method and
    the connection to the DB is made.

    When you run the app, however, you will see a bunch of deprecation warnings.
    Do not worry about these now. These will be fixed later in the tutorial.

    If everything went correctly a new DB will be created in the cluster, with the name
    that you provided (if it did not exist previously) and a connection to that DB will
    have been successfully made.

    To remove the deprecation warnings, pass this object to the connect method as the second
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }

 */