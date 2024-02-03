// Why is Requiremen of tuples

// let ARRAY: any[] = ["Name", 43435, true, false, "Name", 36]; // here is error that here we pass the value randomly not where  if userpass wrong value then we got error

// Tuples
// type TUPLE = [string, number, boolean]; // mutable tuple
type TUPLE = readonly [string, number, boolean]; // Unmutable tuple

const ARR1: TUPLE = ["Sam", 23, true];
// const ARR2: TUPLE = [true, "Sam", 23]; // give error

// ARR1.push("SAA"); // this is mutable tuple

console.log(ARR1);
