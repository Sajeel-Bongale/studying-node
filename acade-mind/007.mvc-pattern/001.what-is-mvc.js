/*
    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11602946#questions

    MVC is a pattern used in server side development to keep parts of the application separate from each
    other such that each individual piece is only responsible for one part of the application.

    The 3 parts are Model View and Controller. Each part handles one responsibility.
    Model
    Represents your data in code
    It can be created using classes

    View
    Generates what the user sees
    This involves the use of templating engines to generate HTML

    Controller
    This is the route handler
    Orchestrates connection between your model and view

    The controller acts independently of the other two and delegates tasks amongst them. It calls methods
    and performs actions that allow sharing of data between all 3 parts.

    Controllers could be split across multiple middleware.


 */