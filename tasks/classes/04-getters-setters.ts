// 4. Getters and Setters
// Create a class Rectangle with:
// Private width and height fields.
// Getter area that returns the area of the rectangle.
// Setter dimensions that sets both width and height at once.

class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width;
  }

  set dimesion(values: [number, number]) {
    [this.width, this.height] = values;
  }
}

const rect = new Rectangle(10, 5);
rect.area;
rect.dimesion = [20, 10];
