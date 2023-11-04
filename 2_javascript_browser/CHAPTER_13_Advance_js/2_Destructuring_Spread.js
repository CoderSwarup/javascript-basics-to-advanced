console.log("Destructuring assignment and spread operator");


//method 1 
let arr = [6, 8, 6, 8, 9, 0, 70]
let [a, b, ...rest] = arr

//not to be use
//let a = arr[0]

console.log(a, b, rest); //=> rest is give out all remin array


// method 2
let arr2 = [6, 8, 6, 8, 9, 0, 70]
let [c, , , ...rest2] = arr; // => rest start from 8
console.log(c, rest2);


//also use for object 

let { aa, bb } = { aa: 11, bb: 44 }
console.log(aa, bb)




//spread oerator => ...arr_name


let arr3 = [4, 5, 67, 8, 9, 0, 7, 7]
let obj1 = { ...arr3 }
console.log(obj1)




//function
function sum(v1, v2, v3) {
    sum = v1 + v2 + v3;
    console.log("sum is : ", sum)
}

let arr4 = [5, 6, 7]
sum(...arr4);





//change object variable value
let obj2 = {
    name: "sam",
    roll_no: 05
}
console.log("before : ", obj2)
console.log("after : ", { ...obj2, name: "swarup", roll_no: 55 })

console.log("value is not overwrite : ", { name: "swarup", roll_no: 55, ...obj2 })


//quick quiz
let x = "hi";
let y = "bb";
let xx = { x, y };
console.log(xx); // => {x: 'hi', y: 'bb'}