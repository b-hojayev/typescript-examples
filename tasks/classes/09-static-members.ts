// 9. Static Members
// Create a class MathUtils with:
// A static method square(n: number): number.
// A static field PI with value 3.14.

class MathUtils {
  static PI = 3.14;

  static square(n: number) {
    return n * n;
  }
}

const pi = MathUtils.PI;
const square = MathUtils.square(10);
