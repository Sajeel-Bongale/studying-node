/*

    Streams in Practise

    Backpressure happens when the response cannot send the data nearly as fast as it is receiving it from the file.
    To fix the problem of backpressure we use pipes. The pipe operator is available on all readable streams, and it
    allows us to pipe the output of a readable stream right into the input of a writable stream. This will
    automatically handle the speed of the data coming in, and the speed of the data going out.
    All we have to do is to take our readable stream, use the pipe method on it, and then put in a writable stream
    and that is the response. -> example 1

    the pipe operator automatically solves the problem of backpressure and it's also actually a much more elegant and
    straight-forward solution.

    example 1
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    //readableSource.pipe(writeableDestination);

 */