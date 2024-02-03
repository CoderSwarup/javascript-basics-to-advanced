"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    getBreed() {
        return this.breed;
    }
}
const dog = new Dog("Buddy", 3, "Labrador");
console.log(dog.getName()); // Buddy
// console.log(dog.getAge()); // Error: Property 'getAge' is protected and only accessible within class 'Animal' and its subclasses.
console.log(dog.getBreed()); // Labrador
// console.log(dog.getDetails()); // Name: Buddy, Age: 3, Breed: Labrador
