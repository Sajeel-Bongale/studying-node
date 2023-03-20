/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739000#questions

    To install Sequelize on our app we use the command npm install --save sequelize.
    We use --save as it is a production dependency.

    We need to have mysql2 package to use the sequelize package.

    The first thing is to connect to MySQL db with the work bench. Sequelize uses mysql2 behind the scenes however while
    connecting the app with the server we do not use mysql methods instead use the Sequelize commands.

    example 1
    utils -> database.js
    const Sequelize = require("sequelize");

    const sequelize = new Sequelize("node-complete, root, mysqlroot", {
        dialect: "mysql",
        host: "localhost"
    })

    module.exports = sequelize;

 */