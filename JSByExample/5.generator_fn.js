// Generator functions are a unique type of function in JavaScript introduced in ECMAScript 6 (ES6).
// They allow you to create iterators that can yield multiple values one at a time, instead of returning a single value like regular functions.
// Generator functions provide a powerful way to work with data sequences, streams, or async operations in a more readable and intuitive manner.

// To create a generator function, you use the `function*` syntax (note the asterisk after the `function` keyword).
// Within the generator function, you use the `yield` keyword to produce values that can be iterated over.

// Here's a basic example of a generator function:

function* countUpTo(limit) {
    let count = 1;
    while (count <= limit) {
        yield count;
        count++;
    }
}

const counter = countUpTo(5);

console.log(counter.next()); // Output: { value: 1, done: false }
console.log(counter.next()); // Output: { value: 2, done: false }
console.log(counter.next()); // Output: { value: 3, done: false }
console.log(counter.next()); // Output: { value: 4, done: false }
console.log(counter.next()); // Output: { value: 5, done: false }
console.log(counter.next()); // Output: { value: undefined, done: true }

// Let's break down how generator functions work:

// 1. Creating a Generator Function:
//    A generator function is declared using the `function*` syntax.
//    Inside the function body, you use the `yield` keyword to yield values that can be iterated over.

// 2. Yielding Values:
//    The `yield` keyword is used to produce a value from the generator function.
//    When a generator function is called, it doesn't execute its body immediately like regular functions.
//    Instead, it returns an `iterator object`, which you can use to control the flow of the function's execution.

// 3. Iterator Object:
//    The iterator object returned by a generator function follows the iterator protocol.
//    It has a `next()` method that, when called, executes the generator function until it reaches the next `yield` statement.
//    The `next()` method returns an object with two properties: 
//    `value`, which contains the yielded value, and `done`, which indicates whether the generator has finished producing values (`true`) or not (`false`).

// 4. Pausing and Resuming:
//    The beauty of generator functions is that they can be paused and resumed during execution.
//    When the generator function encounters a `yield` statement, it pauses its execution and returns the current value.
//    The next time `next()` is called on the iterator, the function resumes execution from where it left off until it reaches the next `yield` statement.

// 5. End of Iteration:
//    When a generator function reaches the end of its execution or a `return` statement,
//    subsequent calls to `next()` will have `{ value: undefined, done: true }` to indicate that the iteration is complete.

// Generator functions provide an elegant way to work with sequences of data or async operations,
// as they allow you to write asynchronous-looking code in a synchronous fashion using `yield`,
// making it easier to reason about complex asynchronous flows.

// A generator function can be "stopped" midway, and later continue from where it stopped.
// Every time a generator function encounters a yield keyword, the function yields the value specified after it.