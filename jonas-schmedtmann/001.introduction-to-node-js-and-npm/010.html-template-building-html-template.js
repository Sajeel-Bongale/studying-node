/*

    HTML Template - Building HTML Template

    We load the the data and the templates before creating the server as they will be loaded only once. If we read the
    files inside the server then we will be repeatedly fetching data whenever we have a request which leads us to
    block the main thread. -> example 1

    example 1

    const http = require("http");
    const fs = require("fs");

    const url = require("url");

    //Reading files before the the request is parsed
    const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8");
    const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8");
    const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8");

    const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,"utf-8");
    const dataObject = JSON.parse(data);

    const server = http.createServer((request, response) => {
        const pathName = request.url

        //This is the overview page
        if(pathName === "/" || pathName === "/overview") {
            response.writeHead(200, {
                "Content-Type": "text/html",
            })
            const cardsHtml = dataObject.map(item => replaceTemplate(templateCard, item)).join("");
           console.log(cardsHtml);
        }
        //Product Page
        else if(pathName === "/product") {
            response.end("This is the Product Page");
        }
        //API
        else if(pathName === "/api") {
            response.writeHead(200, {
                "Content-Type": ""
            })
            response.end(data);
        }
        //Not found Page
        else {
            response.writeHead(400, {
                "Content-Type": "text/html",
                "my-own-header": "Hello World"
            })
            response.end("<h1>Page not found</h1>");
        }
    })

    server.listen(8080, "127.0.0.1", () => {
        console.log(`Listening to requests on port 8000`)
    });

 */