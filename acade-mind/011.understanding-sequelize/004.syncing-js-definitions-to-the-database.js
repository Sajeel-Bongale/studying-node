/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739002#questions

    The sync method parses data from the models folders and creates tables. The sync method returns a promise. When the
    promise is resolved successfully the connection between the backend and server is established. If the connection is
    fails then the error object enters the catch block. -> example 1

    The table which is created has two extra columns createdAt and updatedAt which is added by sequelize. We can see
    the tables on our workBench.

    In the below example we start our backend only once the server is up and all the tables are created.

    example 1
    const sequelize = require("./utils/database");

    sequelize.sync()
    .then((result) => {
        console.log(result);
        app.listen(3000);
    })
    .catch(error => console.log(error))

 */