"use strict";
// Enumerates
const person1 = {
    name: "samn",
    age: 11,
    role: "user",
};
console.log(person1);
// method 2
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const PERSON2 = {
    name: "samn",
    age: 11,
    role: Roles.admin,
};
console.log(PERSON2);
