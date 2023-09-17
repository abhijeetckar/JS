//The hoisting behavior can cause unexpected bugs in your application.
//That's why developers are generally advised to avoid var and stick to let and cost.

// block scope - {}
// local scope - local scope is for variables declared inside functions.
// global scope - Global scope is for variables declared outside functions

// var 
    // > are hoisted to the top of their global or local scope
    // > can have a global, local, but not block scope
    // > can be redeclared and reassinged
    // > variables are hoisted with initial value as undefined

// let 
    // > are hoisted to the top of their global, local, or block scope 
    // > can have a global, local, or block scope
    // > can't be redeclared and can be reassinged
    // > variables are hoisted without initial value || reference error : cannot access variable before initialization

// const
    //  > are hoisted to the top of their global, local, or block scope
    //  > can have a global, local, or block scope
    //  > neither can be redeclared and nor can be reassinged
    //  > variables are hoisted without initial value || reference error : cannot access variable before initialization


    // slight shortcut for multiple vars
    let d = 'd', e = 'e'
    
    //example
const number = 50

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
