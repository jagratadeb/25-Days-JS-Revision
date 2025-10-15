// Comparison examples with numbers
console.log(2 > 1); // true, because 2 is greater than 1
console.log(2 >= 1); // true, because 2 is greater than or equal to 1
console.log(2 < 1); // false, because 2 is not less than 1
console.log(2 == 1); // false, because 2 is not equal to 1
console.log(2 != 1); // true, because 2 is not equal to 1

// Comparison with strings and numbers
console.log("2" > 1); // true, because "2" is coerced to a number (2 > 1)
console.log("02" > 1); // true, because "02" is coerced to a number (2 > 1)

// Comparison with null
console.log(null > 0); // false, because null is converted to 0, and 0 is not greater than 0
console.log(null == 0); // false, because null only equals undefined in loose equality
console.log(null >= 0); // true, because null is converted to 0, and 0 is equal to 0

// Comparison with undefined
console.log(undefined == 0); // false, because undefined is not loosely equal to any number
console.log(undefined > 0); // false, because undefined cannot be converted to a number for comparison
console.log(undefined < 0); // false, because undefined cannot be converted to a number for comparison

// Strict equality comparison
console.log("2" === 2); // false, because strict equality checks both value and type, and "2" is a string while 2 is a number

// Repeated undefined comparisons
console.log(undefined == 0); // false, same as above
console.log(undefined > 0); // false, same as above
console.log(undefined < 0); // false, same as above
