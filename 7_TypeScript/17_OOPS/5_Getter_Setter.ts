class Car {
  public _MaxAge: number | undefined;
  constructor(public name: string, public color: string) {
    // if (MaxAge > 20) {
    //   throw new Error("Car is old");
    // }
  }

  // settter
  public set Maxage(maxage: number) {
    if (maxage > 20) {
      throw new Error("Car is old");
    }
    this._MaxAge = maxage;
  }

  // getter
  public get Maxage(): number {
    if (this._MaxAge === undefined) {
      throw new Error("Max Age Not Set");
    } else {
      return this._MaxAge;
    }
  }

  Details(): void {
    console.log(
      `This car is a ${this.color} ${this.name} and Age is ${this._MaxAge}`
    );
  }
}

class BMW extends Car {
  constructor(public name: string, public color: string) {
    super(name, color);
  }

  ShowDetails(): void {
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
