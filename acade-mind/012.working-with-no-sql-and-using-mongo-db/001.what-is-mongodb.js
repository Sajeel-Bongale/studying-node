/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11942748#questions/8368590

    MongoDB is a nosql database. It is derived from the word Humongous, which means it can store lots and lots of data.

     MongoDB is used for large scale applications and to query database really fast. In MongoDB we dont have tables, we
     have collections. We do not have fields in MongoDB, we have Documents. MongoDB is schemaless which means the
     data we store in the database should not follow a structure as we had models in sql.

     MongoDB uses Json object to store collection -> example 1

     MongoDB behind the scenes uses BSON format to store data in the database. We can have nested objects inside of the
     object.

     example 1

    {
        "name": "Max",
        "age": 29,
        "address": {
            "city": "Munich"
        },
        "hobbies": [
            {"name": "Cooking"},
            {"name": "Shopping"}
        ]
    }

 */

