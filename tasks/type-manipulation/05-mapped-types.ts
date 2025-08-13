// 1. Basic Mapped Type
// Create a type Booleanify<T> that takes an object type and replaces all property values with boolean.
// Then, use it with this type:
// Expected result:
// type SettingsFlags = {
//   notifications: boolean;
//   autoSave: boolean;
//   darkTheme: boolean;
// };
type Settings = {
  notifications: string;
  autoSave: number;
  darkTheme: boolean;
};
type Booleanify<T> = {
  [Property in keyof T]: boolean;
};
type SettingsFlag = Booleanify<Settings>;

// 2. Removing Readonly
// Create a type MutablePerson from this type by removing the readonly modifier from all properties:
type Person = {
  readonly id: number;
  readonly name: string;
  readonly isActive: boolean;
};
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
type MutablePerson = Mutable<Person>;

// 3. Making All Properties Required
// Given:
type PartialProfile = {
  username?: string;
  email?: string;
  age?: number;
};
// Create a mapped type CompleteProfile where all properties are required.
type Complete<T> = {
  [K in keyof T]-?: T[K];
};
type CompleteProfile = Complete<PartialProfile>;

// 4. Remapping Keys with as
// You have:
interface Car {
  brand: string;
  model: string;
  year: number;
}
// Create a mapped type CarGetters that generates methods like getBrand(), getModel(), getYear() for each property.
type Getter<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: T[K];
};
type CarGetters = Getter<Car>;

// 5. Filtering Out a Key
// Given:
interface User {
  id: number;
  name: string;
  password: string;
}
// Create a mapped type PublicUser that removes the password property.
type Remove<T> = {
  [K in keyof T as Exclude<K, "password">]: T[K];
};
type PublicUser = Remove<User>;

// 6. Mapping Over a Union
// Given:
type CatEvent = { kind: "cat"; meowVolume: number };
type DogEvent = { kind: "dog"; barkPitch: string };
// Create an AnimalEventConfig type that maps the kind to a handler function for that event.
type AnimalEventConfig<T extends { kind: string }> = {
  [E in T as E["kind"]]: (event: E) => void;
};
type Config = AnimalEventConfig<CatEvent | DogEvent>;

// 7. Conditional Mapped Type
// Given:
type DataFields = {
  name: { value: string; pii: true };
  age: { value: number };
  email: { value: string; pii: true };
};
// Create a mapped type NeedsGDPR that returns true if a property has pii: true, otherwise false.
type Check<T> = {
  [K in keyof T]: T[K] extends { pii: true } ? true : false;
};
type NeedsGDPR = Check<DataFields>;
