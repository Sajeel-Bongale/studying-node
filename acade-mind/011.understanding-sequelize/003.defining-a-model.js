/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739002#questions

    The model in Sequelize is not defined in class but in the below format. We use the define property to create a
    model. The first argument is the name of the product and the second argument is an object which takes the
    columns we want to create along with its specifications.

    example 1
    const Sequelize = require("Sequelize");

    const sequelize = require("../utils/database");

    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: Sequelize.STRING,
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    module.exports = Product;

 */