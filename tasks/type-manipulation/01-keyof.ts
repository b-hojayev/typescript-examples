// Task 1: Basic keyof
// Given this type:
type User = {
  id: number;
  name: string;
  email: string;
};
// Create a type UserKeys that represents all keys of User.
// Create a variable of type UserKeys and assign one valid key to it.

type UserKeys = keyof User;
const val: UserKeys = "name";

// Task 2: keyof with index signature
// Given this type:
type Dictionary = {
  [key: string]: number;
};
// Create a type DictKeys using keyof.
// Explain why DictKeys might include both string and number.
type DictKeys = keyof Dictionary;

// Task 3: Using keyof in a function
// Create a function getProperty that accepts two arguments:
// An object of type User.
// A key of type keyof User.
// The function should return the value of the object at that key.

const user: User = { id: 1, name: "Alice", email: "alice@mail.com" };
function getProperty(user: User, key: keyof User) {
  return user[key];
}
console.log(getProperty(user, "name"));

// Task 5: keyof with union types
// Given these types:
type Admin = { id: number; role: string };
type Guest = { id: number; expires: Date };
type Person = Admin | Guest;
// Create a type PersonKeys using keyof Person.
// Explain which keys are included in PersonKeys and why.
type PersonKeys = keyof Person;
