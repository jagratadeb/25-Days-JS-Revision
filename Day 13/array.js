const myArr = [0, 1, 2, 3, 4, 5, true, "Jagrata Deb", ["hello"]];
console.log(myArr);

console.log(myArr[0]); // 0
console.log(myArr[1]); // 1
console.log(myArr[2]); // 2
console.log(myArr[7]); // "Jagrata Deb"

// Array Methods

// Length of the array
console.log("Length:", myArr.length);

// Add an element to the end
myArr.push("new item");
console.log("After push:", myArr);

// Remove the last element
myArr.pop();
console.log("After pop:", myArr);

// Add an element to the beginning
myArr.unshift("start");
console.log("After unshift:", myArr);

// Remove the first element
myArr.shift();
console.log("After shift:", myArr);

// Check if array includes a value
console.log("Includes 3:", myArr.includes(3));
console.log("Includes 'Jagrata Deb':", myArr.includes("Jagrata Deb"));

// Find index of an element
console.log("Index of true:", myArr.indexOf(true));

// Slice a portion of the array
console.log("Slice (2 to 5):", myArr.slice(2, 5));

// Splice to remove and insert
myArr.splice(2, 2, "inserted", "values");
console.log("After splice:", myArr);

// Flatten nested arrays (if any)
const flattened = myArr.flat();
console.log("Flattened:", flattened);

// Iterate with forEach
myArr.forEach((item, index) => {
  console.log(`Item at ${index}:`, item);
});

// Map to transform items
const mapped = myArr.map((item) =>
  typeof item === "number" ? item * 2 : item
);
console.log("Mapped:", mapped);

// Filter to get only numbers
const numbersOnly = myArr.filter((item) => typeof item === "number");
console.log("Filtered numbers:", numbersOnly);

// Reduce to sum numbers
const sum = numbersOnly.reduce((acc, val) => acc + val, 0);
console.log("Sum of numbers:", sum);
