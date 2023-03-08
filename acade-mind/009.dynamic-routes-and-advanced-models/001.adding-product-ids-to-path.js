/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738854#learning-tools

    To make the routing truly dynamic, we need to be able to take parameters from the url. These are called route
    params. To add these, we can add them to the links in the views that we created that help us navigate between
    pages.

    In these links using the templating engines we can place the dynamic ids or other data that we want to pass
    So in an ejs template:
    <div class="card__actions">
        <a href="/products/<%= product.id %>" class="btn">Details</a> <- addition of dynamic productId <%= product.id %>
        <form action="/add-to-cart" method="POST">
            <button class="btn">Add to Cart</button>
        </form>
    </div>

 */