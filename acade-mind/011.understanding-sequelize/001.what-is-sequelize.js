/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738996#questions

    Sequelize is a third party library which is an object relational mapping library. This library is a wrapper over
    the SQL code which behind the scenes executes long SQL code for us while providing us with a short methods for
    calling the commands or creating objects.

    Sequelize helps to create tables for us, map relations among the tables and when we call a method on the table
    javascript object, sequelize executes the SQL query or the SQL command that is required. -> example 1

    Sequelize helps to make a model and which data needs to be saved in the db for creating the model. We can
    instantiate an object and run queries on that. Sequelize also helps us to associate our model to other models
    -> example 2


    example 1
    SQL query
    INSERT INTO USERS VALUE(1, Max, 28, Shah)

    Sequelize query
    const user = User.create({name: Max, age: 28, password: Shah})

    example 2
    Model -> User.Product

    Instance -> const user = User.build();

    Queries -> User.findAll();

    Associations -> Users.hasMany(Product);

 */