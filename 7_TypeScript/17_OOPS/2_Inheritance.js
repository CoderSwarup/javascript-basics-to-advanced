"use strict";
// Inheritance
class Main {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Introduce() {
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Extends
class StudentClass extends Main {
    constructor(name, age, school, rollno) {
        super(name, age);
        this.school = school;
        this.rollno = rollno;
    }
    //
    Introduce() {
        super.Introduce();
        console.log(`  , School Name is ${this.school} and Roll No is ${this.rollno}`);
    }
}
const STUDENT1 = new StudentClass("sam", 22, "NESB", 21);
console.log(STUDENT1.Introduce());
