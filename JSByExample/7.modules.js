// CommonJS and ES6 (ESM) are two different module systems in JavaScript, each with its own set of features and use cases.
// Here are the key differences between them:

// --> (ES6 Module)
export function add(a, b) {
    return a + b;
}

import { add } from './math.js';
console.log(add(2, 3)); // Output: 5

// --> (Common JS)
function add(a, b) {
    return a + b;
}
module.exports = { add };

// main.js (importing module)
const math = require('./math.js');
console.log(math.add(2, 3)); // Output: 5

// 1. Import and Export Syntax:
//    - CommonJS: It uses `require()` to import modules and `module.exports` or `exports` to export values. Importing is synchronous.
//    - ES6 (ESM): It uses `import` to import modules and `export` to export values. Importing can be asynchronous, allowing for dynamic imports using the `import()` function.

// 2. Execution Timing:
//    - CommonJS: Modules are loaded synchronously and executed immediately upon import. This can lead to potential performance bottlenecks when loading multiple modules.
//    - ES6 (ESM): Modules are loaded and executed asynchronously, allowing better control over the timing of imports and potentially improving performance.

// 3. Static Analysis:
//    - CommonJS: Since imports and exports are dynamically evaluated, static analysis and optimization are limited.
//    - ES6 (ESM): The static nature of imports and exports allows tools to perform better analysis, optimization, and dead code elimination.

// 4. Top-Level Scope:
//    - CommonJS: Each CommonJS module has its own scope, and the values are cached after the first import, allowing for singleton-like behavior.
//    - ES6 (ESM): ES6 modules have their own scope per file, and imports are live bindings, meaning changes in one module can affect the imports in other modules.

// 5. Named vs. Default Exports:
//    - CommonJS: Emphasizes default exports, although named exports are possible using an object.
//    - ES6 (ESM): Supports both named and default exports natively.

// 6. Circular Dependencies:
//    - CommonJS: Supports circular dependencies with cached module instances, but they can lead to challenges in code readability and maintainability.
//    - ES6 (ESM): Circular dependencies can be managed better using asynchronous imports and exports, but it's still recommended to avoid them.

// 7. Browser Support:
//    - CommonJS: Designed for server-side use, not natively supported in browsers without tools like Browserify or webpack.
//    - ES6 (ESM): Modern browsers support ES6 modules natively, but for broader compatibility and advanced features, bundlers like webpack or Rollup are often used.

// 8. Dynamic Imports:
//    - CommonJS: Does not have a built-in mechanism for dynamic imports.
//    - ES6 (ESM): Supports dynamic imports through the `import()` function, allowing you to load modules asynchronously when needed.

// In summary, while both CommonJS and ES6 (ESM) are module systems in JavaScript,
// ES6 modules offer advantages like better static analysis, improved asynchronous loading, native browser support, and more flexible import/export syntax.
// The choice between them often depends on the environment, tooling, and project requirements.