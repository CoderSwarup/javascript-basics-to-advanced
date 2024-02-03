"use strict";
// bydefault funtion return void if it nothing return
function greet(name, age) {
    console.log(`Welcome ${name} your age is ${age}`);
}
greet("Sam", 33);
function greet1(name, age) {
    console.log(`Welcome ${name} your age is ${age}`);
}
greet1("Sam", 34);
// arrow Function
const greet2 = (name, age) => {
    console.log(`Welcome ${name} your age is ${age}`);
};
greet2("Sam", 35);
// return string
const greet3 = (name, age) => {
    return `Welcome ${name} your age is ${age}`;
};
console.log(greet3("Greet 3 Stirng", 57));
// is palindrome
const is_palindrome = (text) => {
    const reversedText = text.split("").reverse().join("");
    return text === reversedText;
};
console.log(is_palindrome("refer"));
