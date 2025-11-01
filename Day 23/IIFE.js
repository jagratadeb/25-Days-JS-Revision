const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private helper function
  function log(message) {
    console.log(`[CounterModule]: ${message}`);
  }

  // Public API
  return {
    increment: function () {
      count++;
      log(`Incremented count to ${count}`);
    },
    decrement: function () {
      if (count > 0) {
        count--;
        log(`Decremented count to ${count}`);
      } else {
        log("Count is already zero");
      }
    },
    reset: function () {
      count = 0;
      log("Count reset to 0");
    },
    getCount: function () {
      log(`Current count is ${count}`);
      return count;
    },
  };
})();

// Usage
CounterModule.increment();
CounterModule.increment();
CounterModule.getCount();
CounterModule.decrement();
CounterModule.reset();
