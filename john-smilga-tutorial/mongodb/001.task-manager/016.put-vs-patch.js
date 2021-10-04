/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=8201s
    Github: https://github.com/Sajeel-Bongale/task-manager

    Both PUT and PATCH perform the function of mutating resources.

    They both require body in the request object.

    The major difference between PUT and PATCH methods is that PUT methods are for replacing resources
    and PATCH methods are for updating them.

    Consider a resource with a schema like:

    {
        "name": String - required,
        "age": Number - default - 18,
        "height": Number - Optional with no default
    }

    In a PATCH request body, you can only send the properties on the resource you want to update
    example you can send the update object body with 1 or more properties like:
    {
        "name": "New Value"
    }

    This will result in only the name property being updated and the others will be left as they are.
    As you see the PATCH method is used to only update certain parts of the resource leaving the other
    parts as they are.

    However, in a PUT request, properties that are not sent in the body will be removed as the expectation
    is to replace the entire resource object (the id remains the same though).

    So if you send an object with the PUT method like:
    {
        "name": "New Value"
    }
    The result will be that the name property will be updated, the age property will update from its original value to
    the default that is set in the Schema and the height property will be lost because it was not sent in the request
    object and that there is no default set for it.


 */