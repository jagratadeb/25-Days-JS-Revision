// Declaring a variable with let and reassigning it to a different type
let x = 10;
console.log("Initial value of x:", x);
x = "ten"; // valid because JavaScript is dynamically typed
console.log("Updated value of x:", x);

// Demonstrating type coercion with + and - operators
console.log("'5' + 1:", "5" + 1); // "51" (string concatenation)
console.log("'5' - 1:", "5" - 1); // 4 (string converted to number)

// Comparing values with == and ===
console.log("0 == false:", 0 == false); // true (type coercion)
console.log("0 === false:", 0 === false); // false (strict comparison, no type coercion)
console.log("null == undefined:", null == undefined); // true (both are considered "empty")
console.log("null === undefined:", null === undefined); // false (different types)

// Checking types of special values
console.log("typeof NaN:", typeof NaN); // "number" (NaN is a special number value)
console.log("typeof null:", typeof null); // "object" (historical JavaScript quirk)
