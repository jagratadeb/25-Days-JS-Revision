// Primitive values (stored on the stack) vs Non-primitive (objects stored on the heap)

// Example with primitive (string) — assigning creates a copy
let myName = "Jagratadeb";
let anotherName = myName; // anotherName copies the value of myName
myName = "DebJagrata"; // changing myName does not affect anotherName

console.log("myName:", myName); // DebJagrata
console.log("anotherName (copy):", anotherName); // Jagratadeb

// Example with objects (referential types) — assignment copies the reference
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

console.log("userOne before:", userOne);

let userTwo = userOne; // userTwo references the same object as userOne
userTwo.email = "jagrata@gmail.com"; // mutating via userTwo affects userOne

console.log("userOne.email after mutation:", userOne.email); // jagrata@gmail.com
console.log("userTwo.email after mutation:", userTwo.email); // jagrata@gmail.com

// If you want to copy objects (not references), use shallow copy methods like Object.assign or spread operator
let userThree = { ...userOne }; // creates a shallow copy
userThree.email = "copy@example.com"; // mutation doesn't affect userOne

console.log("userOne.email final:", userOne.email);
console.log("userThree.email (independent copy):", userThree.email);
