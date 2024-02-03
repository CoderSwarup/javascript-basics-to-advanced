class PERSONClass {
  constructor(public name: string, protected age: number) {}

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class PP1 extends PERSONClass {
  constructor(public name: string, protected age: number) {
    super(name, age);
  }

  //
  public Intro(): void {
    console.log(super.getDetails());
  }
}

const John = new PP1("John", 30);
John.Intro();
