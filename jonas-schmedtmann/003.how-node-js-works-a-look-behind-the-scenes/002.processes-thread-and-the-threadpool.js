/*

    Processes, Thread and the Thread pool

    When we use Node on a computer, it means that there is a Node process running on that computer and the process is
    just a program running on that computer. NodeJS runs on a single thread which means that the thread is a sequence
    of instructions. A thread is like a box where our code is executed in a computers processor. Node running on a
    single thread makes it easy to block Node applications.

    Node application, will run in just a single thread. No matter if you have 10 users or 10 million users accessing
    your application at the same time and so we need to be very careful about not blocking that thread.
    When the program is initialized, all the top level code is executed, which means all the code that is not inside
    any callback function, all the modules that are in our app are required and all the callbacks are also registered.
    Then after all that, the event loop finally starts running. The event loop is where most of the work is done in our
    app. So, it's the heart of the entire Node architecture.

    But some tasks are too heavy and extensive to be executed on the event loop because they might block the single
    thread, so that's when thread pool comes into play. The thread pool is provided by the libuv library.
    The thread pool gives us four additional threads that are completely separate from the main single thread. We can
    actually configure it up to 128 threads. But usually, these four are enough.
    So these threads together formed a thread pool. The event loop automatically offload heavy tasks to the thread pool
    and all this happens automatically behind the scenes.
    The expensive tasks that do get offloaded are all operations are:
        1. File System API
        2. Cryptography
        3. Compression
        4. DNS lookup
    All of this would easily block the main thread so Node takes care of automatically offloading them into the thread
    pool, where we don't block our event loop.

 */