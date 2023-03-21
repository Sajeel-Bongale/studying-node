/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739008#questions/5458366

    create method creates a new table and saves it to the db. Similarly, build method also saves an object in
    javascript and then we have to manually save the object. To immediately create and store the object we use the
    create method. -> example 1

    example 1
    Product.create({
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description,
    })
        .then((result => {
            console.log(`Created the product`);
        }))
        .catch((error) => {
            console.log(error);
        })

 */