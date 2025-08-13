// Task 1: Simple property access
// You have the following type:
type Car = {
  make: string;
  model: string;
  year: number;
  electric: boolean;
};
// Tasks:
// Create a type CarMake that is the type of the make property.
// Create a type CarInfo that is the type of make | year.
// Try to create a type Invalid that accesses a non-existent property like color and see what error TypeScript gives.

type CarMake = Car["make"];
type CarInfo = Car["make" | "year"];
// type Invalid = Car["color"]; //error

// Task 2: Indexed access with arrays
// You have the following array:
const books = [
  { title: "1984", author: "Orwell", pages: 328 },
  { title: "Sapiens", author: "Harari", pages: 443 },
  { title: "Dune", author: "Herbert", pages: 412 },
] as const;
// Tasks:
// Create a type Book representing a single element of books.
// Create a type BookPages representing just the pages property of a book.
// Create a type BookTitleOrAuthor representing either the title or author property.

type Book = (typeof books)[number];
type BookPages = (typeof books)[number]["pages"];
type BookTitleOrAuthor = (typeof books)[number]["author" | "title"];

// Task 3: Using keyof
type Laptop = {
  brand: string;
  ram: number;
  ssd: boolean;
};
// Tasks:
// Create a type LaptopKey that is a union of all keys of Laptop.
// Create a type LaptopValue that is a union of all value types of Laptop.
// Create a type RamOrSsd that is the type of either ram or ssd.
type LaptopKey = keyof Laptop;
type LaptopValue = Laptop[LaptopKey];
type RamOrSsd = Laptop["ram" | "ssd"];
