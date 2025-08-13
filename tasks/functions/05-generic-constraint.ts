// Generic Constraints
// Create a function getLength that accepts anything with a .length property and returns the length.

// Create maxByLength — given two arguments with .length, returns the one with greater length.

function getLength<T extends { length: number }>(val: T) {
  return val.length;
}

function maxByLength<T extends { length: number }>(val1: T, val2: T) {
  return val1.length >= val2.length ? val1 : val2;
}

//Example:
console.log(getLength([10, 1]));
console.log(getLength("assa"));
console.log(maxByLength([1, 2, 2], [2, 2]));
