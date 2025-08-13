// Task 1 — Basic typeof
// Goal: Use typeof to declare a type that matches an existing variable.

// Step 1: Declare a variable
const username = "Alice" as string;

// Step 2: Declare a new variable of the same type as username using typeof
let user2: typeof username;

// Step 3: Assign a correct value
user2 = "Bob"; // should work
// Check: user2 = 123 → should give a TypeScript error.

// Task 2 — Using typeof with objects
// Goal: Extract a type from an object variable.

const point = { x: 5, y: 10 };

// Step 1: Declare a new variable that has the same type as point
let newPoint: typeof point; // Fill in

// Step 2: Assign a valid value
newPoint = { x: 0, y: 0 }; // works

// Step 3: Assign an invalid value
// newPoint = { x: 0 }; // should cause an error

// Task 3 — typeof with function return types
// Goal: Use typeof with ReturnType to type a variable.

function createUser(name: string, age: number) {
  return { name, age };
}

// Step 1: Use typeof and ReturnType to declare a variable matching the function's return type
let newUser: ReturnType<typeof createUser>;

// Step 2: Assign a value
newUser = { name: "Bob", age: 25 }; // works
// newUser = { name: "Bob" }; // error

// Task 4 — typeof with nested objects
// Goal: Extract types from nested properties.

const config = {
  server: { host: "localhost", port: 8080 },
  debug: true,
};

// Step 1: Type a variable that has the same type as config.server
let serverConfig: (typeof config)["server"];

// Step 2: Assign a value
serverConfig = { host: "127.0.0.1", port: 3000 }; // works
// serverConfig = { host: "127.0.0.1" }; // error

// Task 5 — Advanced: combining typeof with arrays
// Goal: Extract the type of array elements.

const fruits = ["apple", "banana", "orange"];

// Step 1: Type a variable that matches the type of array elements
let myFruit: (typeof fruits)[number];

// Step 2: Assign a value
myFruit = "grape"; // works
// myFruit = 123; // error
