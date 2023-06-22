/*

    The event loop in practise

    example 1
    const fs = require("fs");

    setTimeout(() => console.log(`Timer 1 is finished`));
    setImmediate(() => console.log(`Immediate 1 is finished`));

    fs.readFile("test.file.txt", () => {
        console.log(`I/O polling phase`);
        console.log(`---------`);

        setTimeout(() => console.log(`Timer 2 is finished`), 0);
        setTimeout(() => console.log(`Timer 3 is finished`), 3000);
        setImmediate(() => console.log(`Immediate 2 is finished`));
    })

    console.log(`hello from top level code`);

    Execution:
    hello from top level code       //Outside of the event loop
    Timer 1 is finished
    Immediate 1 is finished


    I/O polling phase               //Inside of the event loop
    ---------
    Immediate 2 is finished
    Timer 2 is finished
    Timer 3 is finished

    Here, we see that inside the readFile callback function, after the console.logs, the callback for setImmediate
    function is executed and later the timer with 0 seconds and lastly the 3 second timer.
    The setImmediate callback is executed because after the both the timers the loop goes into the polling phase to find
    anything in the I/O polling callback queue but it does not find anything there and so jumps to the setImmediate
    callback as it finds a callback in the queue. It executes that and later searches for any pending callbacks and find
    the callback for timer with 0 seconds and later executes the last timer. It again go to the I/O polling phase waits for
    callbacks and as all the callbacks have been executes and there is nothing left so it exits the programs.

    example 2
    const fs = require("fs");

    setTimeout(() => console.log(`Timer 1 is finished`));
    setImmediate(() => console.log(`Immediate 1 is finished`));

    fs.readFile("test.file.txt", () => {
        console.log(`I/O polling phase`);
        console.log(`---------`);

        setTimeout(() => console.log(`Timer 2 is finished`), 0);
        setTimeout(() => console.log(`Timer 3 is finished`), 3000);
        setImmediate(() => console.log(`Immediate 2 is finished`));

        process.nextTick(() => console.log(`Process.next tick`));
    })

    console.log(`hello from top level code`);

    Execution:
    hello from top level code       //Outside of the event loop
    Timer 1 is finished
    Immediate 1 is finished


    I/O polling phase               //Inside of the event loop
    ---------
    Process.next tick
    Immediate 2 is finished
    Timer 2 is finished
    Timer 3 is finished

    Here, we see that process.next tick is executed is a part of microtask queue so it is executed after every phase.
    nextTick is actually really a misleading name, because a tick is actually an entire loop, but nextTick actually
    happens before the next loop phase, and not the entire tick.

    The thread pool has 4 threads but we can increase them or decrease them to the number of thread we want. The more
    the number of threads the faster is the processing of the async task. 

 */