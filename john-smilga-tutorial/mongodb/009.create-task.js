/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=4656s
    Github: https://github.com/Sajeel-Bongale/task-manager

    With the created model, we can start adding tasks to the database.
    We know that the model is an interface to the collection and that creating new items using this
    model will allow you to add documents into the collection.

    Inside the controller in your code you can now add the object sent from the UI/client which
    has the same structure as mentioned in the schema and we can use this object directly to
    create a document in the collection.

    The create method on the model is async and therefore we need to make the controller method
    async too.

    We can collect the response from the create method and store it in a variable and then
    send the response back with the correct status and the newly generated object which will
    have a new id field. Note that this object contains the name of the collection as key and then
    lists the object which was created as value so you may have to destructure the value.
 */