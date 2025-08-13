// Task:
// Given:
type Dog = { bark(): void };
type Cat = { meow(): void };

// Write a function isDog(pet: Dog | Cat): pet is Dog that checks if "bark" exists.
// Use it to iterate over an array of (Dog | Cat) and call the right method in each case.

function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

const dog1: Dog = {
  bark() {
    console.log("wow");
  },
};
const cat1: Cat = {
  meow() {
    console.log("meow");
  },
};

const check1 = isDog(cat1);
const check2 = isDog(dog1);
console.log(check1);
console.log(check2);
