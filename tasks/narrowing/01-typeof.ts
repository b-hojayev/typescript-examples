// 1. typeof Narrowing
// Task:
// Create a function formatValue that accepts a parameter of type string | number | boolean.
// If it’s a number → return it formatted with 2 decimal places.
// If it’s a string → return it in uppercase.
// If it’s a boolean → return "YES" for true and "NO" for false.

const formatValue = (val: string | number | boolean) => {
  if (typeof val === "number") {
    return val.toFixed(2);
  }

  if (typeof val === "string") {
    return val.toUpperCase();
  }

  if (typeof val === "boolean") {
    return val ? "YES" : "NO";
  }
};

console.log(formatValue(2));
console.log(formatValue(-2));
console.log(formatValue(2.9999));
console.log(formatValue(-2.9999));

console.log(formatValue("heLo"));

console.log(formatValue(true));
console.log(formatValue(false));
