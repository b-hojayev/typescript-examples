// Task:
// Make a function compareInputs(a: number | string, b: string | boolean)

// If a === b, return "Equal values".
// Otherwise, return "Different values".
// Make sure TypeScript allows you to use string methods in the correct branch.

function compareInputs(a: number | string, b: string | boolean) {
  if (a === b) {
    console.log("Equal values");
    a.toUpperCase();
    return;
  }

  console.log("Different values");
}

compareInputs(1, "1");
compareInputs("1", "1");
compareInputs("1", true);
