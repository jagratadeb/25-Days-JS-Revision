// primitive types
let str = "Hello"; // String
let num = 42; // Number
let bool = true; // Boolean
let undef = undefined; // Undefined
let nul = null; // Null
let sym = Symbol("id"); // Symbol
let bigInt = 123n; // BigInt

// non - primitive types
let obj = { name: "Jagrata" }; // Object
let arr = [1, 2, 3]; // Array (object type)
let func = function () {}; // Function (object type)

// type checking
console.log(typeof str); // "string"
console.log(typeof nul); // "object" (quirk in JS)
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true
