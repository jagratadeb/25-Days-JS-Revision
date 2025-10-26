const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfirstname: "Jagrata",
    userlastname: "Deb",
  },
};

console.log(regularUser);
console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfirstname);
console.log(regularUser.fullname.userlastname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2);
console.log(obj3);
