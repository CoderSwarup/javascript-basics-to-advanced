console.log("Hoisting");
//Hoisting is JavaScript's default behavior of moving declarations to the top.

// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.
first();

function first() {
  const user = "sam";

  //   bottom(); // Access

  function bottom() {
    const user2 = "sammy";
    console.log(user);
  }

  //   console.log(user2); // Give Error

  bottom();
}

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// console.log(addTwo(55)); // Give Error
var addTwo = (n) => {
  return n + 2;
};
console.log(addTwo(55));
