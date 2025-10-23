// singleton
// Object.create;

// object literals
const myKey = Symbol("Key");
const JsUser = {
  name: "Jagrata",
  age: 18,
  [myKey]: "This is a key.",
  location: "Jaipur",
  email: "jagratadeb@gmail.com",
  idLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser[myKey]);

JsUser.greeting = function () {
  console.log("Hello JS User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user. ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
