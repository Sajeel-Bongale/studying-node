/*

    API and restful API designs

    API stands for Application Programming Interface is basically a piece of software that can be used by another piece
    of software in order to allow applications to talk to each other.
    REST stands for Representational States Transfer which is basically a way of building web APIs in a logical way,
    making them easy to consume because, we build an API for ourselves or for others to consume.

    We need to follow a couple of principles in order for following a REST Architecture:
        1. Separate API from logical resources
        The key abstraction of information in REST is a resource, and therefore all the data that we wanna share
        in the API should be divided into logical resources. Resource is an object or a representation of something
        which has some data associated to it. Any information that can be named can be a resource. It has to be a name
        and not a verb
        For example: tours, users, reviews

        2. Expose structured resource based URLs
        We need to expose or to make available, the data using some structured URLs that the client can send a request
        to. API can have many different endpoints. Each of which will send different data back to the client or also
        perform different actions.
        For example - https://www.natours.com/addNewTour.
        Url is https://www.natours.com and the endpoint is addNewTour

        3. Use HTTP method
        Endpoint should only contain the resources and not the actions we can perform on them. In the above example
        we do not use the term addNewTours rather build the url like https://www.natours.com/tours and send it a method
        "GET". Similarly to add a new tour we use the endpoint https://www.natours.com/addNewTour but with the HTTP
        method of "POST". With PUT, the client is supposed to send the entire updated object, while with PATCH,
        it is supposed to send only the part of the object that has been changed. So POST is to create a new resource,
        while PUT or PATCH are used to update an existing resource and so it then makes all the difference. DELETE
        method is use to delete the item from the list.
        So these are the five HTTP methods that we can and should respond to when building our RESTful APIs
        so that the client can perform the four basic CRUD operations. So CRUD stands for Create, Read, Update and
        Delete. So, /getToursByUser can simply be translated to /users/3/tours, in this case, user number three.

        4. Send data as json
        JSON is a very lightweight data interchange format which is heavily used by web APIs coded in any programming
        language.  JSON looks like a regular JavaScript object with all these key-value pairs. There are, however, some
        differences, and the most important one is that all the keys have to be strings. When sending the json object
        we send it using the JSend object in which we send it with the status key and sending a data key in which we
        send our data.

        5. Be stateless
        In a stateless RESTful API, all state is handled on the client and not on the server and state simply refers to
        a piece of data in the application that might change over time. Whether a certain user is logged in or on a
        page with a list with several pages should not be remembered by the server. The state should be handled
        on the client means that each request must contain all the information that is necessary to process
        a certain request on the server. So, the server should never ever have to remember the previous request in
        order to process the current request.


 */