/*

    Blocking and Unblocking Asynchronous nature of NodeJs

    When we are running the code synchronously each line of code waits for the previous line of code to be executed.
    Synchronous code is also called blocking code.

    To avoid blocking of code we can use asynchronous code which does not block our code execution. Asynchronous code
    offloads the heavy lifting in the background. Once the result is received the callback function is executed.
    During this time the rest of the code is executed as it is on the execution context.

    For example using readFile instead of readFileSync helps to have non blocking code.

    In NodeJs our code is running only on a single thread. The thread is running on our machines processor. Each
    user accessing the app is using the same single thread to receive data. So, if the code is sync than all the users
    will have to wait until user1 gets the data.

    It is important to have code asynchronously as it does not let a single user block the code of others.

    NodeJS is completely designed around callbacks.

    While writing callback it is important to see that we do not enter the callback hell.

 */