console.log("5" + 2); // "52" → string concatenation
console.log("5" - 2); // 3 → string coerced to number

console.log(0 == false); // true → loose equality with coercion
console.log(0 === false); // false → strict equality

console.log(Boolean("")); // false → empty string is falsy
console.log(Boolean("hi")); // true → non-empty string is truthy

console.log(Number("42")); // 42 → explicit conversion
console.log(String(42)); // "42" → explicit conversion

// true => 1
// false => 0
