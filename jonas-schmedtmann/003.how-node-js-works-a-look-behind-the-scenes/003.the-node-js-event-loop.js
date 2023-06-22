/*

    The NodeJS event loop

    The event loop is the heart of the NodeJS architecture. The event loop takes care of all the callback function which
    are in the application code. All code that is not top level code will not run in the event loop. Some parts which
    get offloaded to the thread pool are taken care by the event loop. Node is an event triggered architecture so it
    has many callbacks functions to take care.
    The event loop does the orchestration, which simply means that it receives events, calls their callback functions,
    and offloads the more expensive tasks to the thread pool.

    When we start our NodeJS program the event loop starts right away. The event loop has multiple phases, and each
    phase has its own callback queue, which are the callbacks coming from the events that the event loop receives. There
    are 4 most important phases in an event loop. There are one or two other phases that are used internally by Node.

    Phase 1: expired Timer callbacks
    The first phase takes care of the expired timers from the setTimeout() function. So, if there are callback functions
    from timers that just expired, these are the first ones to be processed by the event loop. If a timer expires later
    during the time when one of the other phases are being processed, well, then the callback of that timer will only
    be called as soon as the event loop comes back to this first phase.
    So, callbacks in each queue are processed one by one until there are no ones left in the queue, and only then, the
    event loop will enter the next phase.

    Phase 2: I/O Polling and callbacks
    So, polling basically means looking for new I/O events that are ready to be processed and putting them into the
    callback queue. I/O means mainly stuff like networking and file access, and so, it's in this phase where probably 99%
    of our code gets executed, simply because in a typical Node app, the bulk of what we need to do is related to
    networking and also, file accessing.

    Phase 3: setImmediate Callbacks
    setImmediate is a special kind of timer that we can use if we want to process callbacks immediately after the I/O
    polling and execution phase, which can be important in some more advanced use cases.

    Phase 4: Close Callbacks
    Basically, in this phase, all close events are processed, for example, for when a web server or a WebSocket shut
    down.

    Besides these four callback queues, there are actually also two other queues, the nextTick() queue and the other
    microtasks queue, which is mainly for resolved promises. If there are any callbacks in one of these two queues to be
    processed, they will be executed right after the current phase of the event loop finishes instead of waiting
    for the entire loop to finish. So, in other words, after each of these four phases, if there are any callbacks in
    these two special queues, they will be executed right away. For example, imagine that a promise resolves and
    returns some data from an API call while the callback of an expired timer is running. So, in this case, the promise
    callback will be executed right after the one from the timer finishes and the same logic also applies to the
    nextTick() queue. This is how we finished one tick of the event loop, and a tick is basically just one cycle
    in this loop.

    Node simply checks whether there are any timers or I/O tasks that are still running in the background, and if there
    aren't any, then it will exit the application or will continue with the event loop. If there are any pending timers
    or I/O tasks, well, then it will continue running the event loop and go straight to the next tick.

    Event loop is what makes asynchronous programming possible in Node.js, making it the most important feature in
    Node's design and making Node.js completely different from other platforms. We need the event loop because in
    Node.js everything works in one single thread, and so, we can have thousands or millions of users accessing the
    same thread at the same time. This makes Node so lightweight and scalable.

    There are a couple of ways to not block the main thread in NodeJS:
        1. Not using sync versions of functions in fs, crypto and zlib modules in our callback.
        2. Not performing complex calculations eg: loops inside loops
        3. Be careful with JSON in very large objects because at some point, it can start to take a long time to parse,
        or to stringify, JSON.
        4. Do not use complex regular expressions with nested quantifiers or back references, because they can take
        longer than expected.

 */