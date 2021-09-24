/*
    Youtube Link: https://www.youtube.com/watch?v=jIsj0upCBAM
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    In MongoDB, a database is deployed on a cluster for high availability purposes(see replica sets in glossary).

    Inside the database are collections which are like tables.
    Inside a collection are documents which are like rows.

    You can insert documents to the collection as JSON objects. This makes it easy to map it with JS objects.
    As soon as you try to add a new document from the UI it shows that it has an id.
    This id is generated by MongoDB.

    There is also a dropdown for type. Type is data type for the value being inserted. There are several options.

    Documents in MongoDB can have dynamic schema. What this means is that documents in the same collection
    do not need to have the same set of fields or structure.

    We will however not be doing this as it is not a good practice and we will use a package called
    mongoose to enforce these data types.
 */