/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY

    The event loop is the mechanism that allows NodeJS to handle tasks in an asynchronous manner in a
    single threaded environment.

    It allows for the offloading of certain tasks to a place away from the main thread, tasks
    such as blocking I/O, so that it does not affect the overall performance of the application.

    Not all code needs to made asynchronous. However, certain tasks like responding to a fetch(API)
    call, do need to handled in a manner that enables smooth non-blocking experience for the user.

    We use callbacks to work with asynchronous tasks.
 */