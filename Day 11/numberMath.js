// 1. Primitive vs Object Number
const score = 400; // Primitive
const balance = new Number(100); // Object wrapper
console.log(typeof score); // "number"
console.log(typeof balance); // "object"

// 2. Conversion & Formatting
console.log(balance.toString()); // "100"
console.log(balance.toFixed(2)); // "100.00"
console.log(balance.toPrecision(3)); // "1.00e+2"
console.log(balance.toLocaleString()); // "100"
console.log(balance.toLocaleString("en-IN")); // "100"

// 3. Type Conversion Effects
const strBalance = balance.toString();
console.log(typeof strBalance); // "string"
console.log(strBalance.length); // 3

// 4. Max/Min Safe Values
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

// 5. Math Object Basics
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.min(4, 3, 6)); // 3
console.log(Math.max(4, 3, 6)); // 6

// 6. Random Number Generation
console.log(Math.random()); // 0 ≤ value < 1

// Dice roll: 1 to 6
console.log(Math.floor(Math.random() * 6) + 1);

// Generic range: min to max
const min = 10,
  max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Formula version for reuse
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(10, 20));
