/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738862#learning-tools

    The id that we set in the previous section is dynamic and we now need to create a route that will match such a
    dynamic string. For this we use the :param syntax in the route declaration. We do in the shop router file:
    router.get('/products/:productId', shopController.getProduct);

    The : syntax tells express that the value after it is dynamic and it should be treated as a route param.

    NOTE: If we want to create a path such as router.get('/products/delete') then such a path should be placed before
    the dynamic route declaration because if it is placed after it, it will never be reached as express will think
    that the delete is a dynamic string when coming from the client and will always hit the dynamic route controller.
    Therefore, always add specific routes before dynamic ones.

    We will create a controller to handle this route and in this controller we can extract the values using the request
    object like so:
    const prodId = req.params['productId']; <- the productId key name should match the one declared in the route above

 */