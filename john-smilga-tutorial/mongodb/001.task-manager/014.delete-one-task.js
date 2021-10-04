/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=6902s
    Github: https://github.com/Sajeel-Bongale/task-manager

    For deleting a task we will use the findOneAndDelete method.

    To this method we will pass the id of the task that we want to delete inside an object
    with the id as _id (because MongoDB adds the _ to the start of the id field).

    We will handle the response in the same way as we did for get one task.

    Usually when you delete an item, it is not necessary to send back the deleted item in the
    response. The client only needs to know if the operation was successful or not.

    If the operation was indeed successful, the client may make a call to fetch the new and
    updated list of items and then re render the whole list which will obviously not have
    the deleted task.

    So based on the agreed contract you may or may not send the deleted item, you can only suffice
    with the correct status in the response.
 */