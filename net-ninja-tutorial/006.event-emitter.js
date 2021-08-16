/*
    Link: https://www.youtube.com/watch?v=NtrnaTKqFPQ&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=10

    NodeJs has some in built core modules which you can use to make your life easier.
    We require them in the same way in which we require our custom modules.

    One of the core modules in NodeJS is called events module.

    When we require a core module we only require it using the name of the module. We do not
    need to provide it a path. NodeJS identifies it as a core module and requires it correctly.

    One of the things exported from events module is the EventEmitter.
    We can use the EventEmitter to create custom events and react to those events when emitted

    As shown in example 1 we create a new EventEmitter from the events module and then
    add a listener for a custom event.

    For the sake of the example, we emit the event there itself and it then fires the event listener
    callback function.

    In example 2  we are going to import another module called util which is short for
    utilities and it allows us to do various things.
    One of the things that the util module allows us to do is inherit certain things from objects built
    into nodejs or other objects

    You now create a Person constructor and then make it inherit the Event Emitter.
    To do this you use the inherits method on the util module by passing the class
    as the first argument and the thing you want the class to inherit as the second
    argument.
    Here, we make Person inherit custom events emitted by Event Emitter.

    With this done, we attach event listeners to every object made from the person prototype
    which will listen for those events when fired on them.

    As of ES6 we can directly extend the events.Event Emitter, without the need to require the
    util and then call the method of inherits on the two classes. This can be done by making
    Person a class and simply extending  events.EventEmitter -> See example 3
 */

var events = require('events');

var util = require('util')

// Example 1
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (msg) {
    console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emitted')

// Example 2

var Person = function (name) { // Example 3 replace this line with class Person extends events.EventEmitter
    this.name = name;   // replace this line with  constructor(name){ super(); this.name = name; }
};

util.inherits(Person, events.EventEmitter); // You can remove this for class based inheritance in Example 3

/*
The other way to do it using class and extends. This method does not need the inherits method call
class Person extends events.EventEmitter {
    constructor(name){
        super(); this.name = name;
    }
}*/

var james = new Person("james");
var mary = new Person("mary");
var ryu = new Person("ryu");

var people = [james, mary, ryu];

people.forEach(person => {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg)
    })
})

james.emit('speak', 'hi dudes')
ryu.emit('speak', ' lets go to the movies')