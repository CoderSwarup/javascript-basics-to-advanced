"use strict";
class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        // if (MaxAge > 20) {
        //   throw new Error("Car is old");
        // }
    }
    // settter
    set Maxage(maxage) {
        if (maxage > 20) {
            throw new Error("Car is old");
        }
        this._MaxAge = maxage;
    }
    // getter
    get Maxage() {
        if (this._MaxAge === undefined) {
            throw new Error("Max Age Not Set");
        }
        else {
            return this._MaxAge;
        }
    }
    Details() {
        console.log(`This car is a ${this.color} ${this.name} and Age is ${this._MaxAge}`);
    }
}
class BMW extends Car {
    constructor(name, color) {
        super(name, color);
        this.name = name;
        this.color = color;
    }
    ShowDetails() {
        super.Details();
    }
}
// const car1 = new BMW("BMW-x", "red", 333); // here we not get error if we not use getter r setter
const car1 = new BMW("BMW-x", "red"); // here we not get error if we not use getter r setter
//setter
car1.Maxage = 17;
car1.Details();
// getter
console.log(car1.Maxage);
