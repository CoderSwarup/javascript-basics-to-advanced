"use strict";
class MathOperations {
    // static mehtods
    static add(a, b) {
        return a + b;
    }
}
MathOperations.PI = Math.PI;
// We cann access the static Data Memeber and member functions using without creating the Instace of a class
console.log(MathOperations.PI);
console.log(MathOperations.add(13, 3));
