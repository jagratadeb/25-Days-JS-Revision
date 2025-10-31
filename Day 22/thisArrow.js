const person = {
  name: "Jagrata",
  greetRegular: function () {
    console.log("Hello from regular:", this.name);
  },
  greetArrow: () => {
    console.log("Hello from arrow:", this.name);
  },
};

person.greetRegular(); // Output: Hello from regular: Jagrata
person.greetArrow(); // Output: Hello from arrow: undefined (or global name)
