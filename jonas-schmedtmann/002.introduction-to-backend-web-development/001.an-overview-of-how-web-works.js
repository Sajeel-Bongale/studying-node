/*

    An overview of How Web Works

    When we send a request from the client to the server the server responds back with a request which is gonna contain
    the webpage that we just requested and this process is called the request-response model or also the client-server
    architecture.
    When requesting some data from a particular domain the browser actually convert the domain into a real address to
    the server and that happens through DNS which is Domain Name Server. DNS are special servers that are basically
    like the phone-books of the internet.
    So the first step that happens when we open up a website is the the browser makes a request to a DNS and this
    special server will then simply match the web address that we typed into the browser to the server's real IP
    address and actually this happens through your internet service provider or ISP.
    The port number is really just to identify a specific service running on a server and so you can think of it like
    a sub-address.
    Once we have the real web address, a TCP socket connection is established between the browser and the server and
    this connection is typically kept alive for the entire time it takes to transfer all the files of the website.

    TCP is the Transmission Control Protocol and IP is the Internet Protocol, and together they are communication
    protocols that define exactly how data travels across the web. So they're basically the internet's fundamental
    control system, because, again, they are the ones who set the rules about how data moves on the internet.
    HTTP stands for HyperText Transfer Protocol. So after TCP/IP, HTTP is yet another communication protocol.
    A communication protocol is simply a system of rules that allows two or more parties to communicate.

    The beginning of the message is the most important part called the start line, which contains the HTTP method
    that's used in the request, then the request target and the HTTP version. Some of the available HTTP method are
    GET, PUT, PATCH, DELETE and POST. An HTTP request to the server is not only for getting data but we can also send
    data.

    Request headers are just some extra information which we send about the request. In case if we are sending data to
    the server than we are also sending request body. HTTPS is encrypted using TLS or SSL. Server then sends a response
    back to the client. Response has the response headers and the response body which the backend developers send to the
    client. Response body usually contains the html file or the JSON object.

    This entire back and forth between client and server that it just explained happens for every single file
    that is included in the website. There can, however, be multiple requests and responses happening at the same time.
    But the amount is actually limited because, otherwise, the connection would start to slow down.
    When all the files have arrived, the website is rendered in the browser according to the HTML, CSS and JavaScript
    specifications.

    The job of TCP is to break out the requests and responses into thousands of small chunks called packets
    before they are set. Then once they get to their destination, it will reassemble all the packets into the original
    request or response so that the message arrives at the destination as quick as possible, which would not be possible
    if we sent the website as one big chunk.
    The job of the IP protocol is to actually send and route all of these packets through the internet.
    So it ensures that all of them arrive at the destination that they should go using IP addresses on each packet.

 */