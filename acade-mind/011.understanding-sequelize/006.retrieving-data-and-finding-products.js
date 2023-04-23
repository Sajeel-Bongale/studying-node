/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739012#questions/5458366

    fetchAll is a method which is replaced by findAll when fetching data from db. Using findAll without any argument
    leads fetching all the data but if we have arguments past to it then it leads fetching only those values.

    example 1
    Product.findAll()
        .then(products => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All products',
                path: '/products',
            });
        })
        .catch((error) => console.log(error))

 */