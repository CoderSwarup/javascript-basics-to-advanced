"use strict";
// What is type Aliase in TypeScript?
//Type aliases give a type a new name. They are similar to interfaces in that they can be used to name primitives and any other kinds that you’d have to define by hand otherwise. Aliasing doesn’t truly create a new type; instead, it gives that type a new name. Aliasing a primitive isn’t very practical as it’s easy using primitive types, however, it can be used for documentation purposes. Type aliasing is just giving another name for a type. let’s demonstrate a few examples on type Aliasing.
const Person = {
    name: "John",
    age: 30,
    codingLanguage: "JS",
};
const Person1 = {
    name: "Sam",
    age: 10,
};
// const Person2: User = {
//   name: "Sam",
//   codingLanguage: "TS",
// };
// give the error
console.log(Person, Person1);
// pass in the function
const getUser = (user) => {
    return user;
};
console.log(getUser(Person1));
