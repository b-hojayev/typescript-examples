// Task:
// Create:
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
type Shape = Circle | Square;
// Write getArea(shape: Shape) using switch on kind without using !.

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return console.log(shape.radius);

    case "square":
      return console.log(shape.side);
  }
}

const square: Square = { kind: "square", side: 4 };
const circle: Circle = { kind: "circle", radius: 90 };

getArea(square);
getArea(circle);
