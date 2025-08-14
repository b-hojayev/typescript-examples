// 10. Generic Classes
// Create a generic class Box<T> that:
// Has a contents property of type T.
// A method getContents() that returns contents.

class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getContents() {
    return this.contents;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContents()); // Hello

const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123
