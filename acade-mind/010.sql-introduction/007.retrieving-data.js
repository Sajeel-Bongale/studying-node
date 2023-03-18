/*

    Link: https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11738966#questions

    execute function of mysql returns a promise so we can use the .then .catch to read the data we have received from
    the server.

    example 1
    Making a request and receiving a response from the server in the form of a promise.

    db.execute("SELECT * FROM products")
    .then((result) => {
        console.log(result[0], result[1]);})
    .catch((error) => {
        console.log(error);})

*/