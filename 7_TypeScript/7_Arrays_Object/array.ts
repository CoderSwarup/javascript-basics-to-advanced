let arr: number[] = [1, 2, 44, 5];
console.log(arr);
// arr[2] = "gwytgsy"; // give error

let names: string[] = new Array("346", "44", "4");

const arrayOfNumber: number[] = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfNumber);

// map filter
let map: number[] = arrayOfNumber.map((item) => item * 3);
console.log(map);
