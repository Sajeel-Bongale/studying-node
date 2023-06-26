/*

    Introduction to Streams

    Streams are yet another fundamental concept in Node.JS.

    With stream we can read and write data, piece by piece without completing the whole read or write operation.
    Therefore we don't have to keep all the data in memory to do these operations. When we read a file using streams,
    we read part of the data, do something with it, then free our memory, and repeat this until the entire file
    has been processed. For example - Youtube and Netflix which are both streaming companies do not wait for the entire
    video to get downloaded rather show the user the video in chunks only. So instead of waiting until the entire video
    file loads, the processing is done piece by piece or in chunks so that you can start watching even before the entire
    file has been downloaded. This makes streams the perfect candidate for handing large volumes of data.

    Streaming make the data processing more efficient in terms of memory because there is no need to keep all the data
    in memory and also in terms of time because we can start processing the data as it arrives, rather than waiting
    until everything arrives.

    In NodeJS there are 4 types of streams: readable streams, writable streams, duplex streams and transform streams.
    The readable and writeable ones are the most important ones.

 */