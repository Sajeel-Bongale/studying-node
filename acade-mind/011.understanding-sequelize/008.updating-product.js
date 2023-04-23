/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739022#questions/5458366;

    If we want to update a product in the db we first need to find the product to be updated, save the new values
    to the existing product however this does not save the updated product. To save the product on the db we need to
    use the product.save() method which returns a promise. -> example 1

    example 1
      Product.findByPk(productId)
        .then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.description = updatedDescription;
            product.imageUrl = updatedImageUrl
            return product.save();
        })
        .then(() => res.redirect("/admin/products"))
        .catch((error) => console.log(error));

*/