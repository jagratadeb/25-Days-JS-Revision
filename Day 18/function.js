function sayMyName() {
  console.log("J");
  console.log("A");
  console.log("G");
  console.log("R");
  console.log("A");
  console.log("T");
  console.log("A");
}

sayMyName(); // calling
// sayMyName -> reference

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function loginUser(username = "Human") {
  return `Hello, ${username}`;
}

console.log(add(96, 5));

const sub = subtract(100, 50);
console.log(sub);

console.log(loginUser());
console.log(loginUser("Jagrata Deb"));
