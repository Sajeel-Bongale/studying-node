/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11739030#questions/5458366

    In SQL we can connect two things using these below mentioned relationship:
        1. One to One
        2. One to Many
        3. Many to Many

    We can relate two things before we use the sync method to create the tables. If we have already created the tables
    then we can use the force property to incorporate the changes we added into the relationships between the products.

    Usually, for production applications we specify the relationship before we create the tables. -> example 1

    SQL constraints are used to specify rules for the data in a table. Constraints are used to limit the type of data
    that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any
    violation between the constraint and the data action, the action is aborted.

    onDelete Cascade means that if the user is deleted then the products will also be deleted. -> example 2

    example - 1
    A.hasOne(B, {options})
    The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key
    being defined in the target model (B).

    A.belongsTo(B, {options})
    The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key
    being defined in the source model (A).

    A.hasMany(B, {options})
    The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key
    being defined in the target model (B).

    A.belongsToMany(B, {through: C})
    The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B,
    using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will
    automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.

    example 2
    Product.belongsTo(User, {
    constraints: true,
    onDelete: "CASCADE"
    })

    User.hasMany(Product);

*/