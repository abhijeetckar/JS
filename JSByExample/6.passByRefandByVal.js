// In JavaScript, the concepts of "pass by reference" and "pass by value" refer to how data is transferred when passing variables to functions.
// However, these terms can be a bit misleading in the context of JavaScript due to its behavior. Here are the key points for each concept:

// Pass by Value:
// 1. Primitive types, such as numbers, strings, booleans, and `null`, are passed by value.
// 2. When you pass a primitive value to a function, a copy of the value is made and passed to the function. 
  // Changes to the parameter inside the function do not affect the original value outside the function.
// 3. Modifying the parameter inside the function does not affect the original variable.
// 4. There is no way to modify the original value through the parameter.

function modifyValue(val) {
    val = 42;
  }
  
  let num = 10;
  modifyValue(num);
  console.log(num); // Output: 10 (unchanged)
  
  // Pass by Reference (sort of):
  // 1. Objects (including arrays and functions) are technically passed by value in terms of the reference to the object.
  // 2. When you pass an object to a function, a copy of the reference to the object is made and passed to the function.
  // 3. While the reference is copied, both the original and the copy point to the same object in memory. This can lead to confusion and sometimes appears similar to "pass by reference" behavior.
  // 4. Changes made to the object's properties inside the function are reflected outside the function, as the object itself is not being copied.
  
  function modifyObject(obj) {
    obj.property = "modified";
  }
  
  const myObj = { property: "original" };
  modifyObject(myObj);
  console.log(myObj.property); // Output: "modified"
  
  // To summarize, while the terms "pass by value" and "pass by reference" can be misleading in JavaScript,
  // understanding that primitive types are copied when passed to functions and objects' references are copied can help you work effectively with data manipulation in the language.