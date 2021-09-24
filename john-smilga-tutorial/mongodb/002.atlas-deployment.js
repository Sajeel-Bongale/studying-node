/*
    Youtube Link: https://www.youtube.com/watch?v=jIsj0upCBAM
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    You will need to create a Cloud Hosted MongoDB database. For this go to:
    https://www.mongodb.com/cloud/atlas
    and create a free account.

    This service is created by the authors of MongoDB itself and it allows you to host a small
    free tier MongoDB cluster.

    Once your account is created create a new project (preferably with the name task-manager)

    Then open the project page and say Build a Database.
    The create database page prompts us to enter the details and it will create a cluster
    inside which the database will be deployed.

    Only one cluster can be created per project.

    A cluster created 3 replicas of your database. Once the cluster and databases are setup,
    go to Database Access under security.

    Here you will be able to grant access to users who will be able to connect to your newly
    created database.

    Select password as the method for authentication and add a username, password for the user

    Select the necessary database privileges.
    Add this user.

    In the Network Access tab you will be able to restrict access to the database based on IP
    addresses. For now it is open to everyone.

    Finally you will need the connection string for your application to be able to connect to the database.
    For this go to Database tab, click on the Connect button, click on Connect your application.

    Pick the connection string and add it to the connect file in the db folder. We will move this to
    .env file later in the demo

    You can create dummy database and collections using the Add My Own Data button on the clusters page.

    We will however add them programmatically later.

 */