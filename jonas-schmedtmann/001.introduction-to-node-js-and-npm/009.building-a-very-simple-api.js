/*

    Building a very simple API

    API is a service from which we can request some data.

    We can read the data from the file using the fs.readFile method and write data on the browser using the response.end
    method.
    If we want to get data from the API and later view it, rather than calling the api again and again and
    storing the value we can call the API once before the server is created and store it in a variable. We can do this
    synchronously. -> example 1

    example - 1
    const data = fs.readFileSync(`${__dirname/dev-data/data.json}`);
    const dataObject = JSON.parse(data);

    const server = http.createServer((request, response) => {
        const pathName = request.url

        if(pathName === "/") {
            response.end("This is the overview");
        } else if(pathName === "/product") {
            response.writeHead(200, {"Content-Type": "application/json"})
            response.end(dataObject);
        } else {
            response.end("Page not found");
        }
    })

 */