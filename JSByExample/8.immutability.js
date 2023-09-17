// Immutability is a fundamental concept in functional programming that emphasizes the idea that once data is created, it cannot be changed or mutated.
// Instead of modifying existing data, functional programming encourages creating new data structures with the desired changes.
// This has several benefits, including making code easier to reason about, avoiding unexpected side effects, and enabling easier parallel
// and concurrent programming.

// Here's an explanation of immutability in functional programming with an example in JavaScript:

// **Example: Modifying an Array Without Immutability**

// Consider a scenario where we have an array of numbers and want to double each number in the array:

const numbers = [1, 2, 3, 4, 5];

// Attempt to modify the array in place
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}

console.log(numbers); // Output: [2, 4, 6, 8, 10]


// In this example, we've modified the original `numbers` array in place by doubling each number using a `for` loop.
// This approach mutates the existing data.

// **Example: Immutability in Functional Programming**

// Now, let's achieve the same result using immutability:

const numbers2 = [1, 2, 3, 4, 5];

// Create a new array with the doubled values without modifying the original array
const doubledNumbers = numbers2.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers2); // Original array remains unchanged: [1, 2, 3, 4, 5]


// In this functional programming approach, we haven't modified the original `numbers` array.
// Instead, we used the `.map()` method to create a new array, `doubledNumbers`, where each element is doubled. The original array remains unchanged.

// Benefits of Immutability:

// 1. **Predictable State**: Immutability ensures that once data is created, it won't change unexpectedly,
// making it easier to reason about the state of your program.

// 2. **Concurrency**: Immutable data can be safely shared among multiple threads or processes without the risk of race conditions and data corruption.

// 3. **Pure Functions**: Immutability encourages the use of pure functions, which take inputs and produce outputs without side effects.
// This makes testing and debugging easier.

// 4. **Undo/Redo and Time-Travel Debugging**: Immutability allows you to easily implement features like undo/redo and time-travel debugging
// by storing a history of state changes.

// In functional programming languages like Haskell, immutability is enforced by the language itself, and data structures are inherently immutable.
// In languages like JavaScript, while it's not enforced, you can adopt immutable programming practices to achieve the benefits of immutability.
// Libraries like Immutable.js or functions like `Object.assign()` and the spread operator (`...`) can help facilitate immutability in JavaScript.