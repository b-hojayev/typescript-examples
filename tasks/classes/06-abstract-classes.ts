// 6. Abstract Classes
// Create an abstract class Shape with:
// An abstract method area(): number.
// A concrete method printArea() that logs "Area: " + this.area().
// Create a subclass Circle that:
// Has a radius field.
// Implements the area() method.

abstract class Shape {
  abstract area(): number;

  printArea() {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
circle.printArea();
