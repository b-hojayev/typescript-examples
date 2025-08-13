// 1. Function Type Expressions
// Create a function applyTwice that:
// Takes a function (n: number) => number
// Calls it twice in a row on a given number and returns the result.

// Create a type alias Logger for (message: string) => void and use it in a function runWithLogging.

function applyTwice(fn: (n: number) => number, x: number): number {
  return fn(fn(x));
}

type Logger = (message: string) => void;

function runWithLogging(fn: Logger, msg: string) {
  fn(msg);
}

// Example
console.log(applyTwice((n) => n + 2, 5)); // 9
runWithLogging(console.log, "Hello"); // "Hello"
