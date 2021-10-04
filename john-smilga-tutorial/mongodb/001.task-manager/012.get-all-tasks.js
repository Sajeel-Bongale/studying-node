/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=5902s
    Github: https://github.com/Sajeel-Bongale/task-manager

    Now that we have created an object we will look at how to get all the documents inside the
    collection and display it.

    For this we will need to use the query API that is available on the Model instance.

    For getting all the documents, we will be using the find method.

    This method takes an object as an argument that helps you to filter out the content
    that will be fetched from the collection.

    eg: Tasks.find({completed: false}) will return only those objects which have their
    completed field marked as false.
    An empty object returns all the objects.

    In the docs it mentions that a Query type(which is, the according to the Mongoose docs, the category
    within which the find method is classified as) has a then method and thus can be used as a promise.

    However, they are not real promises. This is only a benefit provided by the library so that we
    can use the async/await syntax on them.

    With this information we setup our get all tasks controller method and fetch them and send them
    back to the user.


 */