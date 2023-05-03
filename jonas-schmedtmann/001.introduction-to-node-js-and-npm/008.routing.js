/*

    Routing

    Routing means implementing different actions for different urls.

    example - 1

    const http = require("http");
    const url = require("url");

    const server = http.createServer((request, response) => {
        const pathName = request.url

        if(pathName === "/") {
            response.end("This is the overview");
        } else if(pathName === "/product") {
            response.end("This is the product");
        } else {
            response.end("Page not found");
        }
    })

 */