// 8. Class Parameter Properties
// Refactor this class:
// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// to use parameter properties in the constructor.

class User {
  constructor(public name: string, public age: number) {}
}

const user = new User("Gitler", 99);
