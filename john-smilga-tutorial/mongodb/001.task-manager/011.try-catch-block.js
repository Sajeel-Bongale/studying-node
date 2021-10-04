/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=5661s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    While adding basic validations, we made sure that the user is not able to insert any content
    that does not meet the validation criteria.

    However, when the data is sent to the database, and it returns an error because of the constraints
    we specified, we are not handling this error. Due to this, the request gets stuck indefinitely
    and there is no proper response from the server to the client.

    To handle this, we wrap the create calls on the model inside a try/catch block.

    We then send a proper response with a status of 500 and send the error as a json object
    whenever the database insertion fails.
 */