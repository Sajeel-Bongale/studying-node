/*
    Link: https://www.youtube.com/watch?v=qSAze9b0wrY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=13

    A protocol is a set of communication rules, that two sides agree to use when communicating.

    The client and server communicate by agreeing on a protocol.

    FTP is used for file transfer
    HTTP is used for HTML pages

    When the structure of the information that's being sent has been decided on,
    for example HTTP, the information is then sent down a socket between the two
    computers via a protocol called TCP

    So although the data is structured in a particular way and that's going to be
    either HTTP or FTP or something like that the way that it's sent from the server
    to the client is via a protocol called TCP and what this essentially does is
    split up the data into smaller little sections like this and transfers them
    along the socket and these small little sections called packets.

    Using NodeJS you can build a server that provides responses to such requests.

    When we send a request to a server which NodeJS is living on how do
    we know that the request was meant for NodeJS itself and not for some other program
    which is also running on the server instead like an email program.

    The answer is ports. NodeJS and other programs running on the server or listen
    to a particular port number.

    So if a request is sent to an IP address to a particular port number on that IP if
    NodeJS is listening out for requests on that port it will respond, otherwise it won't.


 */