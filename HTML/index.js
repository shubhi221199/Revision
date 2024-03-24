// #Hosting in JavaScript

//  Hosting refers to how variable and function declarations are processed in JavaScript.
//  In JavaScript, variable and function declarations are hoisted to the top of their containing
//  scope during the compilation phase. This means that regardless of where the declarations are
//  made within the scope, they are moved to the top by the JavaScript engine.

// CODE
console.log(myVar); // Outputs: undefined
var myVar = 10;
console.log(myVar); // Outputs: 10

// #Scoping in JavaScript:

// Scoping refers to the visibility and accessibility of variables and functions within a JavaScript program.
//  JavaScript has two main types of scope: global scope and local scope.

// 1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the program.

var globalVar = "I'm a global variable";

function foo() {
  console.log(globalVar); // Outputs: I'm a global variable
}

foo();

//2. Local Scope: Variables declared inside a function or block have local scope and can only be accessed within that function or block.

function bar() {
  var localVar = "I'm a local variable";
  console.log(localVar); // Outputs: I'm a local variable
}

bar();
console.log(localVar); // Throws ReferenceError: localVar is not defined

//   #HOISTING & SCOPING

var globalVar = "I'm a global variable";

function testScope() {
  console.log(globalVar); // Outputs: I'm a global variable

  if (true) {
    var localVar = "I'm a local variable";
    console.log(localVar); // Outputs: I'm a local variable
  }

  console.log(localVar); // Outputs: I'm a local variable
}

testScope();
console.log(globalVar); // Outputs: I'm a global variable
console.log(localVar); // Throws ReferenceError: localVar is not defined
