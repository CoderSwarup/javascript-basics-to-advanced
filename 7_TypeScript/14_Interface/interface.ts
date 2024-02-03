// In Ts an  InterFace is a Powerful Feature That allows You to define a Contract for an object shape . It Specifies the properties and therir Types an Object must have to be Considered of that particular interface type .
// Interface is primarily Use for the Type Checking during the Development and do not getnerates  nay Js code at runtime

// Exmple
interface PERSON {
  name: string;
  age: number;
}

const s1: PERSON = {
  name: "John",
  age: 30,
};

// Create a Function

const GetUserDETAILS = (users: PERSON): void => {
  console.log(users);
};

GetUserDETAILS(s1);

// Inherite The Interface

interface EMPLOYEE extends PERSON {
  company: string;
}

const E1: EMPLOYEE = {
  name: "Tom",
  age: 12,
  company: "Google",
};

// what is interface in TS?

// In TypeScript, an interface is a way to define a contract for an object. It defines the shape of an object, including the properties it should have and their types. Interfaces are particularly useful when defining complex objects or when working with external data.

// How TO use interface with class?

// Implement the interface in a class

interface PERSONinterface {
  firstName: string;
  lastName: string;
  age: number;
  greet: () => string;
}
class STU implements PERSONinterface {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  greet(): string {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
}
