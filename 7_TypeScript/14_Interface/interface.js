"use strict";
// In Ts an  InterFace is a Powerful Feature That allows You to define a Contract for an object shape . It Specifies the properties and therir Types an Object must have to be Considered of that particular interface type .
// Interface is primarily Use for the Type Checking during the Development and do not getnerates  nay Js code at runtime
const s1 = {
    name: "John",
    age: 30,
};
// Create a Function
const GetUserDETAILS = (users) => {
    console.log(users);
};
GetUserDETAILS(s1);
const E1 = {
    name: "Tom",
    age: 12,
    company: "Google",
};
class STU {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}
