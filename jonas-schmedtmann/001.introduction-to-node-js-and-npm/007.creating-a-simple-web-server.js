/*

    Creating a simple Web Server

    For creating a server, first we create a server and secondly we start a server -> example 1

    example 1
    //Creating a server
    const server = http.createServer((request, response) => {
        response.end("Hello from the server");
    })

    //Starting a server
    server.listen(3000, "127.0.0.1", () => {
        console.log(`Listening to requests on port 8000`)
    });
 */