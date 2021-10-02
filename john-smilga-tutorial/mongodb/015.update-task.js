/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=7357s
    Github: https://github.com/Sajeel-Bongale/task-manager

    For updating a task we will use the findOneAndUpdate method.

    To this method we will pass the id of the task that we want to update inside an object
    with the id as _id (because MongoDB adds the _ to the start of the id field).

    As the second argument we will send the newly updated object coming from the client.

    We will handle the response in the same way as we did for get one task.

    When we use the findOneAndUpdate method successfully, the response that we get back
    from the server is the old object. However, the status says 200.

    To rectify this issue we need to pass the options object.
    This will ensure that you get the newly updated object back as well as run the
    validations when updating the object (which is also not happening at this point).

    The third param of the findOneAndUpdate method is the options object and you send in something like this:
    {
        "new": true,
        "runValidators": true
    }

 */