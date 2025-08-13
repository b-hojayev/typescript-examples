// Make a function move(vehicle: Car | Boat):

// Define:
// type Car = { drive(): void; brand: string };
// type Boat = { sail(): void; length: number };

// If "drive" in vehicle → call drive().
// Else → call sail().

type Car = { drive(): void; brand: string };
type Boat = { sail(): void; length: number };

const car1: Car = {
  brand: "BMW",
  drive() {
    console.log("Driving");
  },
};
const boat1: Boat = {
  length: 5,
  sail() {
    console.log("Sailing");
  },
};

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
    return;
  }
  vehicle.sail();
}

move(car1);
move(boat1);
