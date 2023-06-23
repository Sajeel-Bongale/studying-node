/*

    Event and event driven Architecture

    Node's core modules like HTTP, fs and timers are all built around an event driven architecture.
    In Node, there are certain objects called event emitters that emit named events as soon as something important
    happens in the app for example like request hitting server, or a timer expiring, or a file finishing to read.
    These events can then be picked up by the event listeners to which we can attach a  callback functions.

    For example: The server acts as an emitter, and will automatically emit an event called "request" each time that a
    request hits the server. Then, since we already have a listener set up for this exact event, the callback function
    that we attached to this listener will automatically be called.
    This EventEmitter logic is called the Observer Pattern in Javascript programming.

    The idea is to set there an observer, in this case the event listener, which keeps waiting, keeps observing the
    subject that will eventually emit the event that the listener is waiting for. An event-driven architecture makes it
    way more straight forward to react multiple times to the same event. All we have to do is to set up multiple
    listeners.

 */