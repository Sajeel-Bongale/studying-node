/*

    Node, V8, Libuv, C++

    Node depends on a couple of libraries to work properly. The most important ones are the V8 (mumbles) engine and
    libuv. V8 engine is a the reason due to which it understands javascript code which we write. V8 engine is what
    converts JavaScript code into machine code that a computer can actually understand.

    libuv is an open source library with a strong focus on asynchronous IO. This layer is what gives Node access to the
    underlying computer operating system, file system, networking, and more. libuv also implements two extremely
    important features of Node.JS which are the event loop and also the thread pool. libuv is written in C++ and V8
    is also written in C++ and a bit of Javascript. So, NodeJS is also written in C++ and Javascript.

    The event loop is responsible for handling easy tasks like executing call backs and network IO while the thread
    pool is for more heavy work like file access or compression or something like that.

    This architecture allows us to write 100 percent pure JavaScript code, running in Node.JS and still access
    functions like for file reading, which behind the scenes are actually implemented in libuv or other libraries in
    the C++ language.

    Node does actually not only rely on V8 and libuv, but also on http-parser for parsing http, c-ares or something
    like that for some DNS request stuff, OpenSSL for keptography, and also zlib for compression.
    So in the end, when we have all these pieces nicely fit together, we end up with Node.JS ready to be used
    on the server side all four applications.

 */