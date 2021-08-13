/*
    Link: https://www.youtube.com/watch?v=86tgU7UaJmU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=42

    What is the Javascript v8 engine?

    The computer cannot by itself understand the JS we write. It needs something that can convert the written JS into
    a language that the computer can understand( machine level code ).

    Machine code is extremely hard to understand and therefore to write. That is why it is abstracted to
    assembly level language so as to make it easy for developers to write.

    On top of assembly languages are languages like C++ which further abstract away the complexities of the
    assembly language. They still however retain a lot of power in them.

    Finally there is JS which is even higher than languages like C++. This needs to be converted into machine
    language for the computer to understand.

    NodeJS is itself written in C++ but as a program it allows us to write in JS which can run in a browser
    or a server. Since v8 is written in C++ by Google developers, Node, which uses the v8 under its hood
    is also written in C++.

    Since C++ applications can be embedded into other C++ applications, NodeJS makes use of this capability and
    embeds v8 inside it. This allows NodeJS to hook into features provided by the C++ language such as access
    to file system or connecting to a database.

    So when you write code in JS, the underlying v8 implementation lets you avail features that were previously
    unavailable to JS programs.
 */