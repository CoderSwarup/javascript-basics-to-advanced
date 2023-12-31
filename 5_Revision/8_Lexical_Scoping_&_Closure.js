console.log("Lexical Scoping And Closure");

// Following Is AN Example of the Lexical Scoping Where Inner Fcuntion can Access The Variable o Methods From its Outer Function Which Is Known As Lecial Scope
function Outer() {
  let name = "Sam";

  function Inner() {
    console.log("Access Name in Inner : " + name);
  }

  Inner();
}

Outer();

// +++++++++++++++++++++++++++++++++++

// Follwing Is An Example Of Closure
// Here Function Return the another function
//      With its Lexical Scope Variable
function One() {
  let num = 10;

  function Mul5() {
    console.log(`${num} * 5 = ${num * 5}`);
  }

  return Mul5;
}

// Her the return One variable
const closure = One();

closure();

// Real use Case

let RedBtn = document.getElementById("red");
let yellowBtn = document.getElementById("yellow");

// Here is Can be Repetation
// RedBtn.onclick = function () {
//   document.body.style.background = "red";
// };
// yellowBtn.onclick = function () {
//   document.body.style.background = "yellow";
// };

// +++++++++++++++++++++++++++++++++++

// So we Create a Function

// function changeColor(color) {
//   document.body.style.background = color;
// }

// RedBtn.onclick = changeColor("red");
// yellowBtn.onclick = changeColor("yellow");

// Here You can the Without clicking the btn the bacjground Color is Change
// Becasuse here you pass a reference of the Function

// +++++++++++++++++++++++++++++++++++

// So called Here We Use Closure
function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

RedBtn.onclick = changeColor("red");
yellowBtn.onclick = changeColor("yellow");

// Now It Will be Work
