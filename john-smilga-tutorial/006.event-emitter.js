/*
    Link: https://www.youtube.com/watch?v=TNV0_7QRDwY&t=11561s

    In a web based user interface it is easy to imagine the working of JS with events. Such events
    are mouse and keyboard events etc.

    However, there are events in the NodeJS runtime too.

    The idea behind this that we listen for specific events and register functions that will execute
    in response to these events.

    Many built in modules in NodeJS use events under the hood.

    The on method listens for events and emit emits events.

    There can be as many listeners to one emitted event.

    The order of declaration of event listeners and emitters matter. First listen for events, then emit them.

    You can pass data as arguments to the events.
 */

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', function (name, id) {
    console.log(`Data received: ${name} ${id}`);
});

customEmitter.on('response', function () {
    console.log(`Some other logic here`);
});

customEmitter.emit('response', 'john', 45)