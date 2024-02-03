let isBoolean: boolean = true;
let isDone: boolean = false;

// isDone = "YES"; // Invalid

// Function
function isEven(a: number): boolean {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}
console.log(isEven(3));
console.log(isEven(4));

// BigInt => is a built in type of that allows you to work with numbers are larger then the range supported by the regular number type
// In JS we cant read the whole numbers beyond 2 raise to power 53 ==> 2^53

let MAX_NUMBER: bigint = 94545984738574385n;
let max_Number: bigint = (Number as any).MAX_SAFE_INTEGER;

console.log(max_Number);

let AnotherBigNumber: bigint = BigInt("94545984738574385");
console.log(AnotherBigNumber);

let SUM2 = MAX_NUMBER + AnotherBigNumber;

console.log(SUM2);
