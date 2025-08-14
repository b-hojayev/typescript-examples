// 1. Basic Class Declaration
// Create a class called Car with:
// A brand field (string).
// A constructor that sets the brand.
// A method drive() that logs "<brand> is driving".

class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

//Example:
const car = new Car("BMW");
car.drive();
