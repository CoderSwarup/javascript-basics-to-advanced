console.log("Array ")


const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if (index === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}

// Array.isArray
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false


// to string 
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names)
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook


/*
#### Joining array elements

join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
*/

const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.join()) // 1,2,3,4,5

//slice method 

console.log(numbers1.slice(1, 3)) // 2 , 3


// splice method 
const num2 = [1, 2, 3, 4, 5, 6]
num2.splice(1, 4, 11, 22, 33, 44)
console.log(num2)

