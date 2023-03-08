/*

    Adding dynamic paths to links
    To make the routing truly dynamic, we need to be able to take parameters from the url. These are called route
    params. In these links using the templating engines we can place the dynamic ids or other data that we want to pass
    <a href="/products/<%= product.id %>" class="btn">Details</a> <- addition of dynamic productId <%= product.id %>


    Extracting dynamic Params
    The id that we set above is dynamic and we now need to create a route that will match such a dynamic string. For
    this we use the :param syntax in the route declaration. We do in the shop router file:
    router.get('/products/:productId', shopController.getProduct);
    Then to extract it in the controller we do:
    const prodId = req.params['productId'];
    NOTE: Always add specific routes('/products/delete') before dynamic ones('/products/:productId')


    Passing data with post request
    We can add forms to the views and then use the action="POST" to make post requests. However, not all post requests
    may have forms with input elements in them. We can therefore use hidden input elements to pass data.
    <form action="/cart" method="post">
        <button class="btn">Add to Cart</button>
        <input type="hidden" name="productId" value="<%= product.id %>">
    </form>

 */