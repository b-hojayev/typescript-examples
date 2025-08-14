// 3. Readonly Properties
// Create a class Book with:
// readonly title: string
// A constructor to set the title.
// A method printTitle() that logs the title.
// Try changing the title after creation — see what happens.

class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
    // this.title = "Halo"; error
  }
}

//Example:
const book = new Book("Harry Potter");
// book.title = "asd"; error
