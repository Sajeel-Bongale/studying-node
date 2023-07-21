/*

    Modules in practise
    Arguments is an array in JavaScript, and this array contains all the values that were passed into a function. ->
    example 1
    When we log the arguments in the global scope we see that it is inside a function.

    We can also see the wrapper function. In the wrapper function we can see export, require, module, filename and
    directory name and the function body. Node uses this template and then fills up the body of this function with our
    code. -> example 2

    Importing and exporting data from one module to another -> example 3
    We use module.exports when we want to export one single value. We save the exported value in the variable when we
    import it. When importing a class we usually store it in a uppercase first alphabet.

    Using class expression to import and export. -> example 4

    The alternative for doing module.exports is to add properties to the exports object itself. -> example 5
    When we're using simply exports, we can add stuff to this object, so basically properties, and then when we import
    that, so when we require this module, the result that we're gonna get is an object containing all these properties.

    In caching we see that the log is printed only once but the module.exports is printed thrice due to caching.

    Caching a function -> example 6

    example 1
    console.log(arguments);

    example 2
    console.log(require("module").wrapper);

    example 3
    test-module1.js
    class Calculator {
        add(a, b) {
            return a + b;
        }

        multiply(a * b) {
            return a * b;
        }

        divide(a, b) {
            return a / b;
        }
    }

    modules.export = Calculator;

    modules.js
    const C = require("./test-module1.js");
    const calc = new C();
    console.log(calc.add(2, 5));

    example 4
    test-module2.js
    module.exports = class {
        add(a, b) {
            return a + b;
        }

        multiply(a * b) {
            return a * b;
        }

        divide(a, b) {
            return a / b;
        }
    }

    modules.js
    const C = require("./test-module1.js");
    const calc = new C();
    console.log(calc.add(2, 5));

    example 5
    test-module3.js
    exports.add = (a, b) => a + b
    exports.multiply = (a, b) => a * b
    exports.divide = (a, b) => a / b

    modules.js
    const calc2 = require("./test-module3.js");
    console.log(calc2.add(2, 5));

    OR by using destructing
    const {add, multiply, divide} = require("./test-module3.js");
    console.log(calc2.add(2, 5));

    example 6
    test-module4.js
    console.log(`Hello World`);

    module.exports = () => console.log(`I am here`);

     modules.js
     require("./test-module4.js")()
     require("./test-module4.js")()
     require("./test-module4.js")()

 */