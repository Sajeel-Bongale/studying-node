/*
    Youtube Link: https://youtu.be/rltfdjcXjmk?list=PLnHJACx3NwAdl4yeJF6LzjDiLyW1yF9Ds&t=11877
    Github Link: https://github.com/Sajeel-Bongale/store-api

    We will be setting up the project in a similar manner to the task-manager.

    1. Create the connection string for MongoDB
    2. Store it in dotenv file
    3. Create the connect wrapper method and return the actual connect method from within it.
    4. Call the method in the app.js and then start the server if the connection is successful.
    5. Create the middleware for express.json.
    6. Add controllers for the product api and create routes for it.
    7. Add the controllers to the router and add the router to the express middleware for handling api.
    8. Add error handler middleware.

    Create the postman collection for this project and add the details of the newly created routes to it.

    In the earlier project we had handled the async mechanism for our controllers manually, but in this project
    we will use the middleware provided by express itself to handle it.

    For that we need to require the express-async-errors package in the app.js

    Because of this package all the async errors will be handled by the third party express-async-library
    and you do not need to add the try catch blocks yourself.

 */
