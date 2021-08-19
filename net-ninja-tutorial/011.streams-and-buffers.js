/*
    Link: https://www.youtube.com/watch?v=GlybFFMXXmQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=13

    What is a buffer?
    A buffer is a temporary storage spot for a chunk of data that is being transferred from
    one place to another.

    The buffer is then filled with data and passed along.

    It helps to transfer small chunks of data at a time.

    What is a stream?
    A stream is just a stream of data that is being passed between two locations.

    The way this works is that data from a source starts filling up a buffer. Once the buffer is
    full, it gets sent across the stream for a destination to consume. Once one buffer's worth
    of data is transmitted, it can start being read immediately. So, instead of waiting for
    the entire data to be passed consumption can start with a small portion of it.

    This is analogous to filling a swimming pool. To start enjoying the pool(hypothetically)
    all you need is some water. So you start filling a bucket(buffer) with water and then dump
    it into the pool (the stream). In this way the pool starts filling up and you can enjoy
    it even before it's full(consumption).

    Another example is streaming a movie using buffering.
 */