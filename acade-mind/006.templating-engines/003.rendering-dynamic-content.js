/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577396#questions

    So far we have only added static content to the template file. We can make it dynamic by adding
    placeholders for the dynamic content and insert incoming dynamic values into these placeholders.

    To pass dynamic content or variables into the template we pass a second argument to the render
    method which acts like the data for the template. Now these values are available inside the template.

    res.render('shop.pug', {prods: products, docTitle: 'Shop' });

    To iterate over the products in the template using
    each product in prods
    then use #{product.title} to output dynamic content

    You can also add conditionals like if else


    So the final file is
    <!DOCTYPE html>
    html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title #{docTitle}
        link(rel="stylesheet", href="/css/main.css")
        link(rel="stylesheet", href="/css/product.css")
    body
        header.main-header
            nav.main-header__nav
                ul.main-header__item-list
                    li.main-header__item
                        a.active(href="/") Shop
                    li.main-header__item
                        a(href="/admin/add-product") Add Product

        main
            if prods.length > 0
                .grid
                    each product in prods
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

 */