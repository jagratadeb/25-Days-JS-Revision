function scopeTest() {
  console.log(a); // undefined (due to var hoisting)
  // console.log(b); // ReferenceError (let is in TDZ)
  // console.log(c); // ReferenceError (const is in TDZ)

  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var a = 100; // function-scoped, overwrites outer 'a'
    let b = 200; // block-scoped
    const c = 300; // block-scoped
    console.log("Inside block:");
    console.log("a:", a); // 100
    console.log("b:", b); // 200
    console.log("c:", c); // 300
  }

  console.log("Outside block:");
  console.log("a:", a); // 100
  console.log("b:", b); // 20
  console.log("c:", c); // 30
}

scopeTest();


// Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope before code execution. This means you can reference certain variables or functions before they are formally declared in the code.