/*

    Events in Practise

    We can listen and subscribe to events multiple times. .on methods are the observers that wait for until the event
    is emitted.
    We can even pass arguments to the EventListener by passing them as an additional argument in the
    emitter. We can then listen to the argument passed as a parameter when we are listening for the event -> example 2

    If we have multiple listeners for the same event, then they will run synchronously.
    So one after the other in the order that they were in the code.

    We can also listen to events created by the server -> example 3

    So if we are trying to emit our custom events in the applications we have to emit the events ourself, but if we're
    using a built in node module, then these functions will be emitted by the node itself.

    example 1
    const EventEmitter = require("events");

    const myEmitter = new EventEmitter();

    myEmitter.on("newSale", () => {
        console.log(`Event emitted`);
    });

    myEmitter.emit("newSale");

    example 2
    myEmitter.emit("newSale", 999);

     myEmitter.on("newSale", (number) => {
        console.log(`Event emitted`, number);
    });

    example 3
    const server = http.createServer();

    server.on("request", (req, res) => {
        console.log(`Request received`);
    })

    server.on("close", (req, res) => {
        console.log(`Request closed`);
    })

    server.listen(8080, port, () => {
        console.log(`Server is up and running`);
    })


 */