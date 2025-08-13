// 3. Construct Signatures
// Define a type AnimalConstructor that can be called with new (name: string) and returns an Animal object.

// Implement a function createPet that takes an AnimalConstructor and creates a pet named "Fluffy".

class Animal {
  constructor(public name: string) {}
}

type AnimalConstructor = {
  new (name: string): Animal;
};

function createPet(ctor: AnimalConstructor) {
  return new ctor("fluffy");
}

//Example
const pet = createPet(Animal);
console.log(pet.name);
