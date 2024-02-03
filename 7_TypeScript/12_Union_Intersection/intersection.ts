// & => symbol is used to denote intersection

type Person1 = {
  name: string;
  age: number;
};

type Employee = {
  empid: number;
  dept: string;
};

// Intersection
type EmployeDetails = Person1 & Employee;
// Here the Require the all field Of both type
const NewEmployee: EmployeDetails = {
  name: "sam",
  age: 12,
  empid: 111,
  dept: "TECH",
};

// Union
type EmployeDetailsUnion = Person1 | Employee;

//at least one Type Data Is Required
const NewEmployee2: EmployeDetailsUnion = {
  name: "sam",
  age: 12,
  dept: "TECH",
};
