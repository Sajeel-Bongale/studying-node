/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=4374s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    To create a schema, create a new folder called models in the src folder and create a new file
    with the name Task.js

    This file will represent a schema (a blueprint) of the document that will be created for the
    task resource.

    To do that, require the mongoose package in this file and run a new mongoose.Schema() call
    which will save the newly generated schema in a variable.

    Although MongoDB allows you to define documents with no set schema, you should create one
    as it assists in the smooth development of the server application and maintains consistency.

    This schema will be validated when adding new documents to the DB.

    To set this up, create an object that has the key names along with the data type of the key
    pass to the Schema constructor.

    Once the schema is completed now we will set up the model.
    Think of the model as a representation for the collection.

    In mongoose, the model is a wrapper for the schema.

    If the schema can be thought of as providing structure of the document, the model provides
    an interface for the database.

    Using the model we will be able to create, update and delete items from the collections.

    To create the model, run the model method on the mongoose object and pass it two things,
    1. the name of the collection (Task)
    2. the schema to adhere to when adding the data (TaskSchema - created from above)

    Models are fancy constructors compiled from schema definitions. An instance of a model
    is called a document.
    Mongoose automatically looks for the plural, lower cased version of your model.
    Thus Task model will look for tasks collection in the database.

 */