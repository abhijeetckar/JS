// In JavaScript, the `prototype` property is a fundamental aspect of how objects and inheritance work.
// Every object in JavaScript has a `prototype` property, which refers to another object (usually referred to as the "prototype object").
// This prototype object is used as a fallback mechanism for properties and methods that are not directly found in the object itself.
// It forms the basis of JavaScript's prototypal inheritance model.

// When you access a property or method on an object, JavaScript first looks for that property or method in the object itself.
// If it doesn't find it, it checks the object's prototype (accessed through the `prototype` property) and continues up the prototype chain
// until it finds the property or reaches the end of the chain (which is typically `Object.prototype`).

//Here's how the `prototype` property works:

//1. Creating Objects with Prototypes:
//   When you create an object using the object literal syntax or the `new` keyword with a constructor function,
//   the object automatically gets a `prototype` property linked to the prototype of the constructor or `Object.prototype` (if it's a plain object).

   // Object created using object literal syntax
   const obj = {};
   console.log(obj.hasOwnProperty("toString")); // false
   // `toString` is found on `Object.prototype`, which is the prototype of `obj`

// 2. Defining Prototypes with Constructor Functions:
//    When you define a constructor function, you can add properties and methods to its `prototype` property.
//    Objects created with this constructor will have access to these properties and methods through their prototype chain.

   function Person(name, age) {
       this.name = name;
       this.age = age;
   }

   // Adding a method to the prototype of the Person constructor
   Person.prototype.sayHello = function() {
       console.log("Hello, my name is " + this.name);
   };

   const person1 = new Person("Alice", 30);
   person1.sayHello(); // Output: "Hello, my name is Alice"

// 3. Inheritance through the Prototype Chain:
//    When you access a property or method on an object, JavaScript first checks if the property is present in the object itself.
//    If not, it looks for the property in the prototype chain (i.e., the `prototype` property of the object and its prototype's `prototype`, and so on).

   function Animal(name) {
       this.name = name;
   }

   Animal.prototype.makeSound = function() {
       console.log("Animal sound");
   };

   function Dog(name) {
       this.name = name;
   }

   Dog.prototype = Object.create(Animal.prototype);

   Dog.prototype.bark = function() {
       console.log("Woof!");
   };

   const myDog = new Dog("Buddy");
   myDog.bark(); // Output: "Woof!"
   myDog.makeSound(); // Output: "Animal sound"

// 4. Changing Prototypes:
//    You can change the prototype of an object dynamically by assigning a new object to its `prototype` property.
//    However, this will break the connection with the previous prototype,
//    and objects created before the change will not inherit the new properties or methods.

   function Fruit(name) {
       this.name = name;
   }

   Fruit.prototype.taste = function() {
       console.log("Delicious!");
   };

   const apple = new Fruit("Apple");
   apple.taste(); // Output: "Delicious!"

   // Changing the prototype of Fruit
   Fruit.prototype = {
       color: "Red"
   };

   // Objects created before the prototype change do not inherit the new properties
   apple.taste(); // Error: apple.taste is not a function
   console.log(apple.color); // Output: undefined

// The `prototype` property is a key concept for understanding JavaScript's inheritance mechanism
// and allows you to create reusable code through prototypes and prototype chaining.

// However, with the introduction of classes and the `class` syntax in ES6, the usage of the `prototype` property has become less prevalent,
// as classes provide a more familiar syntax for working with object-oriented programming and inheritance.

// Inheritance through prototype is a fundamental feature of JavaScript's object-oriented programming model.
// It allows objects to share properties and methods by establishing a chain of prototypes, commonly known as the "prototype chain."
// Here's a summary of inheritance through prototype in JavaScript:

// 1. **Prototype Property**:
//    Every object in JavaScript has a `prototype` property, which refers to another object called the "prototype object."
//    This prototype object acts as a fallback for properties and methods that are not directly found in the object itself.

// 2. **Constructor Functions and Prototypes**:
//    When you define a constructor function, you can add properties and methods to its `prototype` property.
//    Objects created with this constructor will have access to these properties and methods through their prototype chain.

// 3. **Prototype Chain**:
//    When accessing a property or method on an object, JavaScript first checks if the property exists in the object itself.
//    If not, it looks for the property in the prototype chain by following the `prototype` property of the object and its prototype's `prototype`,
//    and so on, until the property is found or the end of the chain (typically `Object.prototype`) is reached.

// 4. **Inheritance**:
//    Inheritance is achieved by linking objects through their prototypes.
//    When an object's prototype does not have a specific property or method, the JavaScript engine looks for it in the next object in the prototype chain.
//    This creates a chain of inheritance, allowing objects to share properties and methods from their prototypes.

// 5. **Creating Subclasses**:
//    To create subclasses or objects that inherit from a specific prototype, you can use the `Object.create()` method
//    or the `class` syntax introduced in ES6. This allows you to create a new object with a specific prototype as its parent.

// 6. **Dynamic Prototyping**:
//    You can change the prototype of an object dynamically by assigning a new object to its `prototype` property.
//    However, this will break the connection with the previous prototype, and objects created before the change will not inherit the new properties or methods.

// In summary, inheritance through prototype allows objects to share properties and methods in a hierarchical manner,
// promoting code reuse and maintaining a clear relationship between objects.
// Understanding prototype-based inheritance is essential for mastering object-oriented programming in JavaScript.