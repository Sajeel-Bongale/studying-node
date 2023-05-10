/*

    Static VS Dynamic API

    A static website is when a developer uploads the final ready to be served files of a website onto the web server.
    These files usually contain HTML, CSS, JavaScript, images. These are the files that the server will later send
    to the browser when the website is requested.
    The browser will then take these files and render them as they are. This means that there is no work done on the
    server, there is no back-end code, and there's also no application running.
    For example - my portfolio. It will always have the same content whenever the website is opened or closed.

    Dynamic websites are built each time a request is send to the server. They usually contain databases, backend like
    Node.js app, which fetches data from the database and a predefined template which is builds each page that the user
    requests dynamically based on data coming from the database.
    So, each time a browser requests a page, that page is then built as HTML, CSS, and JavaScript files, which will then
    be sent back to the browser. This whole process is called server-side rendering.
    It's called dynamic, because the website can change all the time according to the content that's in the database
    or according to user's actions on the site.

    Due to how powerful browser are becoming these days, we also have websites based on API's. An API-powered website
    is actually quite similar to a dynamic website. So, both work dynamically. Now, the big difference here is that
    with an API, we only send the data to the browser, usually in the JSON data format, and not the entire website.
    So, when building API-powered website, there are two steps, building an API and then consuming the API
    on the client side.
    API stands for Application Programming Interface which basically is a piece of software that can be used by another
    piece of software to allow applications to talk to each other. So, this is where the website
    is actually assembled by plugging the data that we receive into some sort of templates, usually using some
    front-end framework like React, Angular, or Vue.
    When building dynamic websites the html, css and javascript is coming from the backend but when building API
    powered website the database comes from the backend and the client provides the layout where it is assembled.
    API powered website are also called as client side website whereas dynamic websites are called as server side
    website. For example - Twitter, it will display a new feed everytime I login.

 */