class Animal {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  protected getAge(): number {
    return this.age;
  }

  private getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  private breed: string;

  public getBreed(): string {
    return this.breed;
  }

  //   public getDetails(): string {
  //     // Below is Give An Error
  //     return `${super.getDetails()}, Breed: ${this.breed}`;
  //   }
}

const dog = new Dog("Buddy", 3, "Labrador");
console.log(dog.getName()); // Buddy
// console.log(dog.getAge()); // Error: Property 'getAge' is protected and only accessible within class 'Animal' and its subclasses.
console.log(dog.getBreed()); // Labrador
// console.log(dog.getDetails()); // Name: Buddy, Age: 3, Breed: Labrador
