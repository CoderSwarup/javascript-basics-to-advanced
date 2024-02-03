class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Create a Object
const PersonClass1 = new PersonClass("Sam", 12);
const PersonClass2 = new PersonClass("Sammy", 22);
console.log(PersonClass1.name);
