//Waht is Abstarct class in js?
// In JavaScript (and TypeScript), an abstract class is a class that cannot be instantiated directly. It is meant to be subclassed by other classes, which will inherit and implement its properties and methods. Here's an example of an abstract class in TypeScript:
//  Abstarct class is  a special type of JavaScript class that cannot be instantiated. It serves as a base for other classes
// Abstarct class is perform as Protocol on other class

// We cannot Create a Instance of this class
abstract class Game {
  abstract start(): void;

  constructor(public title: string) {}

  public displayTitle(): void {
    console.log(`Welcome to ${this.title}!`);
  }
}

class ChessGame extends Game {
  start(): void {
    console.log("Starting a game of chess...");
  }
}

const chessGame = new ChessGame("Chess Master");
chessGame.displayTitle(); // Output: Welcome to Chess Master!
chessGame.start(); // Output: Starting a game of chess...
