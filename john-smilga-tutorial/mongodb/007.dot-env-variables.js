/*
    Link: https://www.youtube.com/watch?v=jIsj0upCBAM&t=4079s
    Github Link: https://github.com/Sajeel-Bongale/task-manager

    Until now we have stored the connection string in the project itself.
    This is not a good practice, because, if we share our project, the string becomes
    publicly available. This should be avoided at all costs.

    The solution to this problem is to store the variable in a .env file on your local machine.
    It is a key value pair type file and you can store your connection string here.

    The key thing to note is that this file needs to be added to the .gitignore file so as not to be committed
    along with the other code. This keeps the code a secret and restricted to your machine.

    Now we want to use this newly created .env variable and use it as a parameter to the connect method
    to actually make a connection to the database.

    To use it in the code as a parameter, you need to require the dotenv package and call a config
    method on it immediately. This initializes the package with the variable names in the
    .env and makes them available on the process.env object with the same name as mentioned in
    the .env file.

    We can pass this variable to the connectDB method and when you run the project again
    you will find that the connection is successful.
 */