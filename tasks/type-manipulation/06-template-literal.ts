// 1. Basic Template Literal
// Task:
// Create a type Greeting which results in "hello world" by combining "hello" and "world" with a template literal type.
type Greeting = `hello ${"world"}`;

// 2. Union Expansion
// Task:
// Given:
type Fruits = "apple" | "banana";
type Colors = "red" | "yellow";
// Create a type FruitColors that produces all combinations in the format "apple-red" | "apple-yellow" | "banana-red" | "banana-yellow".
type FruitColors = `${Fruits}-${Colors}`;

// 3. Event Names From Object Keys
// Task:
// Given an object type:
type Car = {
  brand: string;
  speed: number;
};
// Create a type CarEvents that produces "brandChanged" | "speedChanged" using template literal types.
type CarEvents = `${keyof Car}Changed`;

// 4. Generic Event Listener
// Task:
// Implement a generic type PropEventSource<Type> so that the method:
// declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
// Allows:
// const car = makeWatchedObject({ brand: "Toyota", speed: 100 });
// car.on("brandChanged", (newBrand) => {}); // newBrand: string
// car.on("speedChanged", (newSpeed) => {}); // newSpeed: number
// but errors on:
// car.on("colorChanged", () => {}); // ❌
type PropEventSource<T> = {
  on<K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (newValue: T[K]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;

const car = makeWatchedObject({ brand: "Toyota", speed: 100 });
car.on("brandChanged", (newBrand) => {
  // newBrand: string
  console.log(newBrand.toUpperCase());
});

car.on("speedChanged", (newSpeed) => {
  // newSpeed: number
  console.log(newSpeed + 10);
});

// 5. Intrinsic String Manipulation
// Task:
// Given:
type AppName = "my_app";
// Create:
// UpperID → "ID-MY_APP" (uppercase)
// LowerID → "id-my_app" (lowercase)
// CapName → "My_app" (capitalize first letter)
// UncapName → "mY_APP" (uncapitalize first letter)
type UpperID = `ID-${Uppercase<AppName>}`;
type LowerID = `id-${Lowercase<AppName>}`;
type CapName = Capitalize<AppName>;
type UncapName = Uncapitalize<Uppercase<AppName>>;

// 6. Cross Multiplication Challenge
// Task:
// Given:
type Languages = "en" | "fr";
type Pages = "home" | "about";
type Sections = "header" | "footer";
// Create a type LocaleKeys that produces all combinations like:
// "en_home_header" | "en_home_footer" | "en_about_header" | "en_about_footer" | "fr_home_header" |
type LocaleKeys = `${Languages}_${Pages}_${Sections}`;
