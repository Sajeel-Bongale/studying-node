/*

    Templating Engines
    With the use of templating engines we can create dynamic templates with data populated from the application
    3 popular templating engines are:
    1. Pug              Syntax like: p #{name}
    2. EJS              Syntax like: <p><%= name%></p>
    3. Handlebars       Syntax like: <p> {{ name }} </p>


    Using pug as the templating engine with dynamic data
    npm i --sav pug
    In app.js
    app.set('view engine', 'pug');  // Sets templating engine to pug
    app.set('views', 'views');      // Marks views folder as the folder to look into for templates
    Create /views/shop.pug
    <!DOCTYPE html>
    html(lang="en")
        head
            meta(charset="UTF-8")
            title My Shop
            link(rel="stylesheet", href="/css/main.css")
        body
             header.main-header
                nav.main-header__nav
                    ul.main-header__item-list
                        li.main-header__item
                            a.active(href="/") Shop
                        li.main-header__item
                            a(href="/admin/add-product") Add Product
            main
            if prods.length > 0             <- Conditional rendering with if else
                .grid
                    each product in prods   <- loop using each
                        article.card.product-item
                            header.card__header
                                h1.product__title #{product.title}
                            div.card__image
                                img(src="some_source", alt="A Book")
                            div.card__content
                                h2.product__price $19.99
                                p.product__description A very interesting book about so many even more interesting things!
                            .card__actions
                                button.btn Add to Cart
            else
                h1 No Products

        In controller
        // res.render('shop');     // Instead of res.sendFile('filepath')
        res.render('shop', { prods: product, docTitle: 'Shop' }); // To pass data to the template


    Adding a layout to pug
    Please refer to acade-mind/006.templating-engines/004.adding-a-layout-pug.js file
    for code as it is too large to accommodate here


 */