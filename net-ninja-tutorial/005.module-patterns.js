/*
    Link: https://www.youtube.com/watch?v=9UaZtgB5tQI&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

    As shown in the section 004.modules-and-require modules need to be exported for use outside.

    You can export one item from a module or several. Single exports are shown in the previous example.

    For multiple exports you can do this:

    module.exports.counter = counter
    module.exports.adder = adder
    module.exports.pi = pi

    where counter and adder are functions and pi is a constant declared previous of exporting.

    In this manner you can export multiple items.

    To shorten this further we can directly attach the function to module.exports.counter directly
    instead of creating functions and then exporting them at the bottom of the file.
    Example

    module.exports.counter = function(arr) {
        return 'There are ' + arr.length + 'ninjas'
    }
    This is same as above example but it makes the code shorter.

    One final way to do it is to export an object.
    Example
    module.exports = {
        counter: counter,
        adder: adder,
        pi: pi
    }
    where counter and adder are functions and pi is a constant declared previous of exporting.

 */