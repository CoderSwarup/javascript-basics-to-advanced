"use strict";
class PERSONClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
class PP1 extends PERSONClass {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    //
    Intro() {
        console.log(super.getDetails());
    }
}
const John = new PP1("John", 30);
John.Intro();
