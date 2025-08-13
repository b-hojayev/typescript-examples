// Rest Parameters and Arguments
// Implement a function sum that takes any number of numbers and returns their sum.

// Call Math.max using spread syntax from a tuple.

function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Spread example
const nums: [number, number] = [4, 5];
console.log(Math.max(...nums));
