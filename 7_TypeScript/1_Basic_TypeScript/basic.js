"use strict";
// Add Two Numbers
// Ts Configuration File  ==> tsc --init
// Function
//  Function name   type of num 1 and num2 function return type
// @ts-ignore
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2)); // give the output
// console.log(sum(1, "Error")); // give the Error
// tsc --noEmitOnError .\basic.ts // ==> this command Use to if the Any error in ts file then not compile in the js
// also in the tsconfig  line no 71 we can enable this
// how you can use this that can be use using the
// direct
//    tsc command in the teminal
