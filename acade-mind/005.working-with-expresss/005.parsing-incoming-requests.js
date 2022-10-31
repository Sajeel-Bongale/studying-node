/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11566276#learning-tools

    We have seen that requests can be routed to a middleware based on the path. However, if there is a
    POST request that needs to be serviced, we need to be able to read the data within the request.

    Express provides a shortcut to read the body of the incoming request. This is by using the property
    called body on the request object.

    Only issue is that if you want to use this body it first appears undefined. We need to do some
    processing first to be able to make use of this body.

    For that, we install a new package called body parser and then set up a middleware at the first
    position (this is because we want all requests' bodies to be parsed and to be available for
    consumption). We call the urlencoded method on the body parser object an pass it an argument for
    initializing it.

    Once done, the bodies of all requests will be visible and usable in the request handlers.

    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    // making the body parser the first middleware
    app.use(bodyParser.urlencoded({extended: false}));


 */
