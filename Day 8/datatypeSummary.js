// Primitive Types
let str = "Hello";
let num = 42;
let bool = true;
let nul = null;
let undef;
let sym = Symbol("id");
let big = 1234567890123456789012345678901234567890n;

// Reference Types
let arr = ["Ironman", "Shaktimaan", "Krrish"];
let obj = { name: "Jagrata", age: 21 };
let func = function () {
  return "Hello World";
};

// Type Checking
console.log("typeof str:", typeof str); // string
console.log("typeof num:", typeof num); // number
console.log("typeof bool:", typeof bool); // boolean
console.log("typeof nul:", typeof nul); // object (quirk!)
console.log("typeof undef:", typeof undef); // undefined
console.log("typeof sym:", typeof sym); // symbol
console.log("typeof big:", typeof big); // bigint

console.log("typeof arr:", typeof arr); // object
console.log("typeof obj:", typeof obj); // object
console.log("typeof func:", typeof func); // function

// Value vs Reference Demo
let a = 10;
let b = a;
b = 20;
console.log("Primitive copy:", a, b); // a = 10, b = 20

let ref1 = { score: 100 };
let ref2 = ref1;
ref2.score = 200;
console.log("Reference copy:", ref1.score, ref2.score); // both = 200
