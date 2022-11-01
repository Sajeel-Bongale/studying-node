/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11577404#questions

    We wrote several HTML files till now. However, most of them have a lot of common content like the header
    tag and navigation bar in the body.

    We can outsource this content to a layout and then use this layout as a common file upon which we add
    our other unique content as per the page.

    We create such a layout in the layouts folder and call the file main-layout.pug
    <!DOCTYPE html>
    html(lang="en")
        head
            meta(charset="UTF-8")
            meta(name="viewport", content="width=device-width, initial-scale=1.0")
            meta(http-equiv="X-UA-Compatible", content="ie=edge")
            title #{pageTitle}
            link(rel="stylesheet", href="/css/main.css")
            block styles
        body
            header.main-header
                nav.main-header__nav
                    ul.main-header__item-list
                        li.main-header__item
                            a(href="/", class=(path === '/' ? 'active' : '')) Shop
                        li.main-header__item
                            a(href="/admin/add-product", class=(path === '/admin/add-product' ? 'active' : '')) Add Product
            block content

    The block keyword allows you to inject custom or unique content from individual pages in the variable names
    mentioned by the styles and content variables.

    Then you extend this file from individual files such as shop and add-product and then pass the unique
    content by defining blocks over in the individual files.

    So shop.pug looks like
    extends layouts/main-layout.pug

    block styles
        link(rel="stylesheet", href="/css/product.css")

    block content
        main
            if prods.length > 0
                .grid
                    each product in prods
                        article.card.product-item
                            header.card__header
                                h1.product__title #{product.title}
                            div.card__image
                                img(src="some url", alt="A Book")
                            div.card__content
                                h2.product__price $19.99
                                p.product__description A very interesting book about so many even more interesting things!
                            .card__actions
                                button.btn Add to Cart
            else
                h1 No Products

    As seen above extend the layout and then use block keyword to inject new content.

    To add classes based on conditions, we can pass new values in the render method second argument which will be
    read by the template and decisions on that will be made. See class attribute additions in the main-layout file

    In the controller:
    res.render('shop', { prods: products,  pageTitle: 'Shop', path: '' });


 */