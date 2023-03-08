/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738868#learning-tools

    Now that the controller has been created we want to find the item by the id that we passed as a dynamic param.
    We will create a new method in the product model that will fetch us the product based on the id by using the
    built in find method after all products have been retrieved.

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }


 */