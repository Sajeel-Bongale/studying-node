/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11942752#questions/8368590

    In nosql is okay to see duplicate data in different collections. We store and retrieve the data in the form we want
    to use it.

    Few ways in which we can show relations are:
        1. Nested/Embed Documents - Having an array or an object to store nested properties. -> example 1
        2. References - We use this approach when we know that there is a lot of data duplication and so avoid
        changing the books details in all places we just change it at a specific place. -> example 2

    Two major characteristics of nosql:
        1. No Schemas so no tables so no structure required
        2. Fewer data relations so we do not have query much.

    MongoDB is popular for its speed and flexibility.

    example 1
    {
        "userName": "Max",
        "age": 36,
        "address": {
            "street": "Madison Road",
            "city": "New York"
        }
    }

    example 2
    Books
    {
        _id: "id1",
        "name": "Lord of the rings"
    }

    Customers
    {
        userName: "Max",
        favBooks: ["id1", "id2"]           //id1 refers to the above book, so just changing the above declaration
    }                                      leads to changing in the entire database where we have used id1


 */