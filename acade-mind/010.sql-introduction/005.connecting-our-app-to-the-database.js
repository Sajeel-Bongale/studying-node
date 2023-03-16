/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738954#questions

    To connect our app with the database we need to install a npm package on our frontend. -> example 1
    This command helps us to write SQL code and execute SQL code in node and interact with the database.

    Setting up connection with the sql database helps us to set up the code that will allow us to connect to the SQL
    database and also give us back a connection object which allows us to run queries.

    createPool helps us to create multiple connections with the database because each query needs its once connection
    once the query is done. Once done the connection will be handed back into the pool and it's available again for a new query
    and the pool can then be finished when our application shuts down. createPool takes an object which takes details
    about our database.

    Connecting mysql to database -> example 2
    Before we query to the database from the machine, it is important to have our database on the server.


    example 1
    npm install --save mysql2

    example 2
    utils -> database.js
    const mysql = require("mysql2");

    const pool =mysql.createPool({
        host: "localhost",
        user: "root",
        database: "node-complete",
        password: "mysqlroot"
    })

    module.exports = pool.promise();

    app.js
    const db = require("./utils/database");

    db.execute("SELECT * FROM products");

 */