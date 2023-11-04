console.log("exercise array level 1")

// 1. Declare an _empty_ array;

let arr = Array()
console.log(arr)


console.log("exercise array level 2")

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 1. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(''))



let new1 = text.split(' ')
console.log(new1)

// console.log(new1.join(''))


console.log(new1.length)


// 1. In the following shopping cart add, remove, edit items



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// console.log(shoppingCart)

// let push = shoppingCart.unshift('Meat')
// console.log(shoppingCart)


// let push1 = shoppingCart.push('Sugar')
// console.log(shoppingCart)

// - remove 'Honey' if you are allergic to honey


// let remove1 = shoppingCart.splice(3, 3)
// console.log(remove1)

// console.log(shoppingCart)


if (shoppingCart.includes('Milk')) {
    console.log("MILK")

} else {

    console.log("NO !MILK")
}

// 1. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']


let webD = frontEnd.concat(backEnd)

console.log(webD)

console.log("Exer Level 1 and 2 is complete ")


console.log("Exer Level 3 ")



// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages)
console.log(ages.sort())

// let ages1 = ages.toString()
// console.log(ages1)
// console.log(Math.max(ages))


// - Find the average age(all items divided by number of items)

