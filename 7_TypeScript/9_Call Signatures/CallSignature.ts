// Call Signature

type Student = {
  name: string;
  age?: number;
};

// const Intro: This declares a constant variable named Intro.

// : (Student1: Student) => String: This specifies the type of the constant Intro. It is a function that takes an argument of type Student and returns a String.

// = (Student1: Student): String => {: This is the assignment part where the function implementation begins. It starts with an arrow function =>.

// const { name, age } = Student1;: This line uses object destructuring to extract the name and age properties from the Student1 object.

// return Welcome My Name is ${name} and My age is ${age};: This line constructs a string using a template literal, incorporating the name and age extracted from the Student1 object.

// };: Closes the function block.

// Whithout Call Signature
const Intro: (Student1: Student) => String = (Student1: Student): String => {
  const { name, age } = Student1;
  return `Welcome My Name is ${name} and My age is ${age}`;
};

const Stu: Student = {
  name: "John Doe",
  age: 23,
};

console.log(Intro(Stu));

// With Call Signature

type Person = {
  firstName: string;
  lastName: string;
  greet: (country: string) => string; // Signature
  //   (country: string): string; // Purely Call Signature
};

const P1: Person = {
  firstName: "John",
  lastName: "Doe",
  greet: (country: string): string =>
    `Welcome My Name is ${P1.firstName} and My last name is ${P1.lastName} and I am From ${country}`,
};

const P2: Person = {
  firstName: "Sam",
  lastName: "Bhai",
  greet: function (country: string): string {
    return `Welcome My Name is ${this.firstName} and My last name is ${this.lastName} and I am From ${country}`;
  },
};

console.log(P1.greet("India"));
console.log(P2.greet("India"));
