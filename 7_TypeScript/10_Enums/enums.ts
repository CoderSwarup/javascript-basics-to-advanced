// Enumerates

// How To Define Enums

type P = {
  name: string;
  age: number;
  role: "user" | "admin";
};

const person1: P = {
  name: "samn",
  age: 11,
  role: "user",
};

console.log(person1);

// method 2
enum Roles {
  user = "user",
  admin = "admin",
}

type P2 = {
  name: string;
  age: number;
  role: Roles;
};
const PERSON2: P2 = {
  name: "samn",
  age: 11,
  role: Roles.admin,
};

console.log(PERSON2);
