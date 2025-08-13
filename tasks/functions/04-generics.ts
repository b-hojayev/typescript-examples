// 4. Generics
// Implement wrapInArray — takes a value of type T and returns an array containing it.

// Implement pickFirst — takes an array and returns the first element or undefined.

// Implement merge — merges two objects into one using generics.

function wrapInArray<T>(value: T) {
  return [value];
}

function pickFirst<T>(array: T[]) {
  return array[0] ? array[0] : undefined;
}

function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

//Example:
console.log(wrapInArray(10));
console.log(pickFirst([1, 2]));
console.log(merge({ a: 1 }, { b: 2 }));
