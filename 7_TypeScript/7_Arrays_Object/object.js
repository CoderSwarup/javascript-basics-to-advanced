"use strict";
let person = {
    name: "John",
    age: 30,
    address: {
        code: 1234,
        city: "New York",
    },
};
console.log(person.name);
// person.name = 17; // give error
let person2 = {
    name: "Sam",
    age: 20,
    address: {
        // code: "11111", // give error
        code: 111,
        city: "In",
    },
};
console.log(person2);
