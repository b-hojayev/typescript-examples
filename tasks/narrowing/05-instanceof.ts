// Task:
// Write a function logDateOrLength(value: Date | string):

// If it’s a Date → log toISOString().

// If it’s a string → log its length.

function logDateOrLength(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.toISOString());
    return;
  }

  console.log(value.length);
}

logDateOrLength("HI GITLER");
logDateOrLength(new Date());
