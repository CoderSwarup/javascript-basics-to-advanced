console.log("Exercise Function ")

function sam(a, b) {
    return a + b
}

let add = sam(2, 3)
console.log(add)

function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)


function sumAllNums1() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums1(1, 2, 3, 4)) // 10
console.log(sumAllNums1(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums1(15, 20, 30, 25, 10, 33, 40)) //173 



function sum(...args) {
    console.log(args)
    let sum = 0;
    args.forEach((e) => {
        sum += e
    })
    console.log("sum is " + sum)
}

// sum(2, 3, 4, 5)

const anonymousFun = function () {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
    )
}

anonymousFun();


//     //iife Function

(function (n) {
    console.log(n * n)
})(2)


//arrow function
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))



// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax1(arr) {
    let answer = []

    arr.forEach((element) => {
        // answer.push(...element)
        answer.push(Math.max(...element))
    })
    console.log(answer)


}

findMax1([[1, 2, 3], [2, 3, 4]])



// 1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.


let arr = (aray) => {

    console.log(aray)

    aray.forEach((elem) => {
        console.log(elem)
    })
}

arr([2, 3, 5])


// 1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.



// 1. Declare a function name _swapValues_. This function swaps value of x to y.

function swapvalues1(a, b) {
    let temp = a
    a = b
    b = temp

    console.log(a, b)
}


swapvalues1(3, 4)
swapvalues1(4, 5)



let array1 = [2, 3, 4, 5, 678, 66]

let rand = Math.floor(Math.random() * array1.length)
console.log(array1[rand])


