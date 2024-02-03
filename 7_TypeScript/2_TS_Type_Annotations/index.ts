// type Annotations is way to type the expicitly write a type of variable , function parameters , function return

// let num: number = 12;
let string: string = "2323";

let any: any = 222;
any = "@323";

console.log(num.toString());

let NotaNum: number = NaN;

// Strings

let myName: string = "Sam";
let MyFirstName: string = "sammy";

console.log(MyFirstName.substring(2, 4));

// String Comparision
let Str1: string = "Sammy Bhai";
let Str2: string = "Sam Bro";

console.log(Str1 === Str2); // Return False

// String Template
let Product: string = "product1";
let p1price: number = 1020;

let Product2: string = "product2";
let p2price2: number = 10820;

let StringTemlate: string = `${Product} : ${p1price}  and ${Product2} : ${p2price2}`;

console.log(StringTemlate);
