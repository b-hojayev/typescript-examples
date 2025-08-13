// 2. Truthiness Narrowing
// Task:
// Write a function printLength that takes value: string | null | undefined.

// If value is truthy, log its length.
// If falsy, log "No value".
// Test with: null, undefined, "", "Hello".

function printLength(value: string | null | undefined) {
  if (!value) {
    console.log("No value");
    return;
  }

  console.log(value.length);
}

printLength(null);
printLength(undefined);
printLength("");
printLength("Hello");
