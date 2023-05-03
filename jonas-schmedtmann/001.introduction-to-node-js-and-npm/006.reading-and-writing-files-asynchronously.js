/*

    Reading and writing files asynchronously

    We can use the readFile method on fs asynchronously as well so that it does not lead to blocking code. -> example 1

    example 1
    fs.readFile("./FilePath", "utf-8", (error, data) => {
        console.log(`Data`, data);
    })
    console.log(`I am here`);

 */