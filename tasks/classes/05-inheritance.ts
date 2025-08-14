// 5. Inheritance
// Create two classes:
// Animal with a method makeSound() that logs "Some sound".
// Dog extends Animal and overrides makeSound() to log "Woof!".

class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof");
  }
}

const animal = new Animal();
animal.makeSound();

const dog = new Dog();
dog.makeSound();
