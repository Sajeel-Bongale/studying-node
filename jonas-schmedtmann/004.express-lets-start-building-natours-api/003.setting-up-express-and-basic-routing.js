/*

    Setting up express and basic routing

    In express unlike node, we can add the http method directly when listening to the request from the app. We can also
    chain methods on the response and the request object. Here we do not have to explicitly set the request header as
    "json/application" as .json automatically set the header as json format. -> example 1

    When checking the url for localhost on postman we use the syntax 127.0.0.1:PortNumberRoute -> example 2

    example 1
    const express = require('express');

    const app = express();

    const port = 3000;

    app.get("/", (request, response) => {
      response.status(200).json({message: "I am on root", app: "Natours"});
    })

    app.post("/overview", (request, response) => {
      response.status(200).send("I am on overview");
    })

    app.listen(port, () => {
      console.log(`Server is started`, port);
    })

    example 2
    127.0.0.1:3000/overview

 */