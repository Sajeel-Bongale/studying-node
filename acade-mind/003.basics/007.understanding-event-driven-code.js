/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12310980#overview

    When a request is received by NodeJS, it does not block the execution of other incoming requests.
    It does so by not running the requests on the same thread and moves the execution of the request
    to a different context apart from the main thread.

    This is where the C++ libraries which are used to write the source code of Node come into play.
    They allow you to keep the event loop running while listening for requests on the main thread
    and as soon as a new request arrives, move its execution to another place.

    Even from inside the request handler you may want some parts of your code to be executed while not
    touching the others. It is therefore essential to add return statements from your code where necessary.
    Remember that return statements will help you exit the createServer callback. However, it will not
    deregister the callbacks like req.on('data') and req.on('end'). These callbacks will continue to run
    and execute as and when an event fires and they will correctly handle the handover of the response
    to the client even if the surrounding code has past execution.


 */
