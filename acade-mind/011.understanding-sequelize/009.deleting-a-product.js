/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739024#questions/5458366

    To delete a product from the db we can use the destroy method.

    To delete the product from the list we need to first find the item and later delete that.

    example - 1
    const productId = req.body.productId;
    Product.findByPk(productId)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            res.redirect("/admin/products");
        })
        .catch(error => console.log(error));

 */