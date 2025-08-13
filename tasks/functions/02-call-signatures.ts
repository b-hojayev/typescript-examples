// 2. Call Signatures
// Define a type Multiplier with:

// A property factor: number

// A call signature (n: number) => number

// Implement a function useMultiplier that accepts a Multiplier and prints the multiplication result.

type Multiplier = {
  factor: number;
  (n: number): number;
};

const multiplier: Multiplier = Object.assign(
  (n: number) => n * multiplier.factor,
  { factor: 3 }
);

function useMultiplier(fn: Multiplier, n: number) {
  console.log(fn(n));
}

// Example
useMultiplier(multiplier, 5); // 15
