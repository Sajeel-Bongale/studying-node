/*
    Link: https://www.youtube.com/watch?v=xHLd36QoS4k&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=6

    When we write NodeJS apps, we don't dump all of our code into one single file and let it run.
    It makes the project difficult to manage and extend.

    We therefore, split our code into separate modules each having a specific set of functionality.

    We then call up on these modules whenever required to utilize its functionality.

    When we need to use this functionality we use the 'require' keyword. It is available in the
    global scope so we can use it anywhere in the project.

    We use it as:
    require('./myUtil')

    We pass a filepath with the filename without the js extension as a string. ./ indicates that the file
    is in the same folder as the calling file

    However, simply requiring the file in a separate file does not give us the content in the module.
    This behaviour is intentional as you may not want to expose all the content from your module.
    You may want to keep some variables and methods private to that module.

    To achieve that we have to do inside the module is explicitly say what part of the module we
    want to make available to all the files which require this module.

    Example:
    // app.js
    const counter = require('./count')

    console.log(counter(['harry', 'jack', 'ryan']))


    // count.js
    const counter = function(arr) {
        return 'There are ' + arr.length + 'ninjas'
    }

    module.exports = counter

    Basically, you attach the things you want to make available outside a module to the
    module.exports property.

    When you require it, whatever is attached to the modules.exports is output into the left
    hand side variable.

    If you export an object, an object is received. But, if, like in this case, you export only
    a single function, it is received when the require is called.

    Note: If you have a function call in a module, on require of that module, the function call will be run,
    irrespective of whether content is exported from that module or not.

 */