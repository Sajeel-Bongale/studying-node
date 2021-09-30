/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=6277s
    Github: https://github.com/Sajeel-Bongale/task-manager

    To get a single task we will use the findOne method available in the queries category.
    It takes a conditions object as parameter.

    Identify the parameter you want to find the resource with (usually we go with an id),
    then create an object using the passed in id from the params and create a request.

    The response may or may not have a document. If no document is present ensure that you
    return from the conditional if block, otherwise JS will continue evaluation and try
    to send the next response too which will lead to unexpected results.

    Write the same catch error handlers as the previous controllers.
 */