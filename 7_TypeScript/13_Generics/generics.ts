// Generics in Ts allow You to crerate reusable Components or Functions Can Work multiple Data types

// with out generics Function
// const FUNCTION = (value: string | number): string | number => {
//   return value;
// };

// const F1: string | number = FUNCTION("sammy");
// const F2: string | number = FUNCTION(111);

// console.log(F1);
// console.log(F2);

// Above is very hectic

// so We use the Generics

// function Fun<T>(value: T): T {
//   return value;
// }

// With Arrow Function
const GENERICFUNCTION = <T>(value: T): T => {
  return value;
};
const F3: string = GENERICFUNCTION<string>("sammy");
const F4: number = GENERICFUNCTION(111); // also work

console.log(F3);
console.log(F4);

// Also pass multiple Values

const add = <T, U>(a: T, b: U): void => {
  console.log(`${a} + ${b}`);
};

add<string, number>("sam", 19);
add("sam", 19); // also is acceptable
