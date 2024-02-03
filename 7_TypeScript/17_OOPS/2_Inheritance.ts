// Inheritance
class Main {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  Introduce(): void {
    console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Extends

class StudentClass extends Main {
  school: string;
  rollno: number;

  constructor(name: string, age: number, school: string, rollno: number) {
    super(name, age);
    this.school = school;
    this.rollno = rollno;
  }

  //
  Introduce(): void {
    super.Introduce();
    console.log(
      `  , School Name is ${this.school} and Roll No is ${this.rollno}`
    );
  }
}

const STUDENT1 = new StudentClass("sam", 22, "NESB", 21);

console.log(STUDENT1.Introduce());
