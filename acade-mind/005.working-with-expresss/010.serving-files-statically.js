/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566318#questions

    For now we know that we can serve files such as HTML files as responses to requests. However, we never
    have HTML files in isolation. We always will have some CSS and JS files associated with it.

    Linking or importing these files directly after serving the HTML files will result in 404 errors. This
    is because NodeJS will treat these requests as normal requests and try to route them to a controller. When
    it finds none, it gets a 404 error.

    To solve this issue we need to tell our application to treat static file requests as non route requests or
    simply put, requests for static files. We can do so by creating a public folder in the root directory.

    However, only doing so and requesting files from the public folder is not enough. These requests continue
    to error out.

    We need to tell our application by way of adding another middleware to recognize such requests and then
    serve those files from the public folder.

    We add:
    app.use(express.static(path.join(__dirname, 'public')));

    // In any HTML file that gets served as a response
    <link rel="stylesheet" href="/css/main.css" />  <- Will look for main.css in {root}/public/css folder

    Now all files such as those with an extension of .css, .js, .png will be searched for in the public
    folder for being served.

    You can add multiple folders as sources for serving static content and they can be named anything.

 */