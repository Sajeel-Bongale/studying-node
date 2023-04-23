/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739016#questions/5458366

    When using findById for retrieving data from db, we receive data as a single object and not in the form of array.

    But there is an alternative way as well we can use to just retrieve a single data which is findAll but using a
    condition to just retrieve one object. The response we receive is an array of object from which we select the
    first item and view it on the screen. -> example 1

    We can also use the findByPk method to retrieve just one item from our db using a particular condition. ->
    example 2

    example - 1
    const productId = req.params.productId;
    Product.findAll({where: {id: productId}})
        .then(products => {
            res.render("shop/product-detail", {
                product: products[0],
                pageTitle: products[0].title,
                path: "/products",
            })
        })


    example - 2
    Product.findByPk(productId)
        .then(product => {
            res.render("shop/product-detail", {
                product: product,
                pageTitle: product.title,
                path: "/products",
            })
        })
        .catch((error) => console.log(error));

 */