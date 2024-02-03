"use strict";
//Waht is Abstarct class in js?
// In JavaScript (and TypeScript), an abstract class is a class that cannot be instantiated directly. It is meant to be subclassed by other classes, which will inherit and implement its properties and methods. Here's an example of an abstract class in TypeScript:
// We cannot Create a Instance of this class
class Game {
    constructor(title) {
        this.title = title;
    }
    displayTitle() {
        console.log(`Welcome to ${this.title}!`);
    }
}
class ChessGame extends Game {
    start() {
        console.log("Starting a game of chess...");
    }
}
const chessGame = new ChessGame("Chess Master");
chessGame.displayTitle(); // Output: Welcome to Chess Master!
chessGame.start(); // Output: Starting a game of chess...
