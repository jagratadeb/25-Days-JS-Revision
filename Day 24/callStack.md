## How does JS execute code + Call Stack
JavaScript uses a call stack to manage function execution. When a function is called, it's added to the stack, and when it returns, it's removed. This LIFO (Last In, First Out) structure ensures that functions complete in the order they're called.

### Call Stack Example
```javascript
function firstFunction() {
    console.log("First Function Start");
    secondFunction();
    console.log("First Function End");
}
function secondFunction() {
    console.log("Second Function Start");
    thirdFunction();
    console.log("Second Function End");
}
function thirdFunction() {
    console.log("Third Function");
}
firstFunction();
```
**Output:**
```
First Function Start
Second Function Start
Third Function
Second Function End
First Function End
```
In this example, the call stack manages the execution of `firstFunction`, `secondFunction`, and `thirdFunction` in the correct order.
### Call Stack Visualization
1. `firstFunction` is called and added to the stack.
2. Inside `firstFunction`, `secondFunction` is called and added to the stack.
3. Inside `secondFunction`, `thirdFunction` is called and added to the stack.
4. `thirdFunction` executes and is removed from the stack.
5. Control returns to `secondFunction`, which completes and is removed from the stack.
6. Control returns to `firstFunction`, which completes and is removed from the stack.
