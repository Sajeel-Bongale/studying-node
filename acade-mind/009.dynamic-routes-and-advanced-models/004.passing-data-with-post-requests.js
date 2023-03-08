/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738896#questions/12315362

    We can add forms to the views and then use the action="POST" to make post requests. However, not all post requests
    may have forms with input elements in them. We can therefore use hidden input elements to pass data.

    <form action="/cart" method="post">
        <button class="btn">Add to Cart</button>
        <input type="hidden" name="productId" value="<%= product.id %>">
    </form>

 */