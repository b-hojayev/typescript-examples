// Task 1 — Basic Conditional Types
// Create a conditional type IsString<T> that returns "Yes" if T is string, otherwise "No".
// Example usage:
// type A = IsString<string>; // "Yes"
// type B = IsString<number>; // "No"
type IsString<T> = T extends string ? "Yes" : "No";
type A = IsString<string>;
type B = IsString<number>;

// Task 2 — Conditional Types with Generics
// Define a generic type ArrayOrSingle<T> that returns T[] if T is not already an array, otherwise returns T as-is.
// Example usage:
// type A = ArrayOrSingle<number>;      // number[]
// type B = ArrayOrSingle<string[]>;    // string[]
type ArrayOrSingle<T> = T extends any[] ? T : T[];
type A2 = ArrayOrSingle<number>; // number[]
type B2 = ArrayOrSingle<string[]>; // string[]

// Task 3 — Conditional Type with Property Check
// Create a type HasName<T> that returns T["name"] if T has a name property, otherwise never.
// Example usage:
// interface Person { name: string; age: number }
// interface Dog { bark(): void }
// type A = HasName<Person>; // string
// type B = HasName<Dog>;    // never
type HasName<T> = T extends { name: any } ? T["name"] : never;
interface Person {
  name: string;
  age: number;
}
interface Dog {
  bark(): void;
}
type A3 = HasName<Person>; // string
type B3 = HasName<Dog>; // never

// Task 4 — Using infer
// Write a type ReturnTypeOf<T> that extracts the return type of a function type T using infer.
// Example usage:
// type A = ReturnTypeOf<() => number>;         // number
// type B = ReturnTypeOf<(x: string) => boolean>; // boolean
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type A4 = ReturnTypeOf<() => number>; // number
type B4 = ReturnTypeOf<(x: string) => boolean>; // boolean

// Task 5 — Conditional Types with Unions (Distributive Conditional Types)
// Define a type WrapInArray<T> that wraps each member of a union type in an array.
// Example usage:
// type A = WrapInArray<string | number>; // string[] | number[]
type WrapInArray<T> = T extends any ? T[] : never;
type A5 = WrapInArray<string | number>; // string[] | number[]

// Task 6 — Non-distributive Conditional Types
// Modify the previous WrapInArray type to prevent distributivity, so that the union is wrapped as a whole.
// Example usage:
// type B = WrapInArrayNonDist<string | number>; // (string | number)[]
type WrapInArrayNonDist<T> = [T] extends [any] ? T[] : never;
type B5 = WrapInArrayNonDist<string | number>; // (string | number)[]

// Task 7 — Nested Conditional Types
// Define a type FlattenArray<T> that removes array nesting one level deep using conditional types and infer.
// Example usage:
// type A = FlattenArray<number[]>;       // number
// type B = FlattenArray<string>;         // string
// type C = FlattenArray<boolean[][]>;    // boolean[]
type FlattenArray<T> = T extends Array<infer Item> ? Item : T;
type A6 = FlattenArray<number[]>; // number
type B6 = FlattenArray<string>; // string
type C6 = FlattenArray<boolean[][]>; // boolean[]

// Task 8 — Conditional Type in Function
// Write a generic function createLabel<T>(input: T) that returns:
// { id: number } if T is number
// { name: string } if T is string
// Use a conditional type to define the return type.
// Example usage:
// let a = createLabel("hello"); // { name: string }
// let b = createLabel(42);      // { id: number }
type NameOrId<T> = T extends number ? { id: number } : { name: string };
function createLabel<T extends string | number>(input: T): NameOrId<T> {
  if (typeof input === "string") {
    return { name: input } as NameOrId<T>;
  } else {
    return { id: input } as NameOrId<T>;
  }
}
let a7 = createLabel("hello"); // { name: string }
let b7 = createLabel(42); // { id: number }
