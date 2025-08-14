// 7. Implementing Interfaces
// Create an interface Playable with a method play(): void.
// Create a class Piano that implements Playable and logs "Playing piano" when play() is called.

interface Playable {
  play(): void;
}

class Piano implements Playable {
  play(): void {
    console.log("Playing piano");
  }
}
