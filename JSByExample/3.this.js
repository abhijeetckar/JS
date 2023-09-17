// In JavaScript, `this` is a special keyword that refers to the current execution context or the object that the function is called on.
// The value of this is determined dynamically at runtime, depending on how a function is invoked.
// The behavior of `this` can vary in different situations,
// and it's crucial to understand the context in which a function is called to correctly determine the value of `this`.

// The value of this can be one of the following based on the invocation context:

// ----------> Global Context (Default Binding):
// If a function is called without any specific context, i.e.,
// it's not a method of an object, this will refer to the global object (in the browser, the global object is window, and in Node.js, it's global).


function showGlobalContext() {
    console.log(this === window); // true (in the browser)
}

showGlobalContext();

// ----------> Method Invocation:
// When a function is called as a method of an object, this refers to the object itself on which the method is called.

const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Hello, John

// ----------> Function Context with Explicit Binding:
//You can explicitly set the value of this using functions like call(), apply(), or bind().

function greet() {
    console.log("Hello, " + this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1); // Hello, Alice
greet.call(person2); // Hello, Bob

// ----------> Constructor Invocation:
// When a function is used as a constructor with the new keyword, this refers to the newly created object.


function Person(name) {
    this.name = name;
}

const person3 = new Person("Mike");
console.log(person3.name); // Mike

// ----------> Arrow Functions:
// Arrow functions behave differently when it comes to this.
// They do not have their own this value;
// instead, they inherit the value of this from the surrounding lexical context (i.e., the nearest non-arrow function).

const person4 = {
    name: "Alice",
    greet: () => {
        console.log("Hello, " + this.name); // `this` is inherited from the surrounding context
    }
};

person4.greet(); // Hello, undefined

// ----------> Arrow Functions and this:
// As mentioned earlier, arrow functions do not have their own this value;
// instead, they inherit the value of this from the surrounding lexical context.
// This behavior is especially useful when using arrow functions as callbacks or inside other functions to preserve the context of this.

// ----------> this in Callback Functions:
// When passing a function as a callback to another function,
// the value of this inside the callback can be different depending on how the callback function is invoked by the parent function.

const obj = {
    name: "Alice",
    callback: function() {
        console.log(this.name);
    }
};

setTimeout(obj.callback, 1000); // Output depends on the context of the parent function

// ----------> Default Binding and Strict Mode:
//In non-strict mode, if a function is called without any specific context, this refers to the global object.
//However, in strict mode (enabled by adding "use strict"; at the beginning of a script or a function), the default binding of this is undefined.

function showThis() {
    "use strict";
    console.log(this);
}

showThis(); // Output: undefined


// Using bind():
// The bind() method allows you to create a new function with a specific value for this, which is not the case with call() or apply().
// It is especially useful when you want to create a new function with a fixed this value for later use.

const person5 = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const greetLater = person5.greet.bind(person);
greetLater(); // Hello, John

// Understanding this is crucial for writing effective JavaScript code, especially when dealing with object-oriented programming, event handlers, or asynchronous operations.
// The value of this can be confusing at times, so its essential to pay attention to the context of the function invocation to determine its value correctly.
// Remember that understanding the value of this is critical to avoid bugs and unexpected behavior in your JavaScript code.
// Pay attention to the context in which functions are called and how they are invoked to correctly determine the value of this.
// Additionally, using arrow functions or explicit binding methods like call(), apply(), and bind() can help you control and manage the this value more effectively.
