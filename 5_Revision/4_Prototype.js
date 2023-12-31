console.log("Prototype in JavaScript");

function mul(n) {
  return n * 5;
}

mul.power = 2;

console.log(mul(5));
console.log(mul.power);
console.log(mul.prototype);

function createuser(username, score) {
  this.username = username;
  this.score = score;
}

//Crating a Prototype

createuser.prototype.printMe = function () {
  console.log("Calling using Prototype");
  console.log(`My name is ${this.username} and My Score is ${this.score}`);
};

console.info("create User Prototype :", createuser.prototype);

// Prototype Methods Only Calling using the new Keyword
const user1 = new createuser("Sam", 99);
user1.printMe();

// Without New Keyword Its Give Error
// const user2 = createuser("Sammy", 199);
// user2.printMe();

//  Object Prototype

Object.prototype.swarup = function () {
  console.log("This prototype Present in All Objects");
};

let arr = [1, 2];

arr.swarup();

// Prototype Inheritance

const User = {
  name: "sammy",
};

const Teacher = {
  lecture: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TAsupport = {
  makeAssignment: "JS Assignment",
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// __proto__ is an old Syntax

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

// Build String Prototype trueLength

let MyName = "Sammy    ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True Length is : ${this.trim().length}`);
};

console.log(MyName);
//Using the Property

MyName.trueLength();

"sammy22   ".trueLength();
