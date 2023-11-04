console.log("Exercise Day 5 Loops ")

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0;
do {
    console.log(i)
    i++
} while (i <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// let i1 = 10;
// do {
//     console.log(i1)
//     i1--
// } while (i1 == 0)

// let i1 = 10;

// i1--
// i1--
// i1--
// i1--
// i1--
// i1--
// i1--
// i1--
// i1--
// i1--


// console.log(i1)

// // 3. Iterate 0 to n using for loop

// // 4. Write a loop that makes the following pattern using console.log():

// // let ii = 0
// for (let ii = 0; ii < 5; ii++) {
//     var out = ' '
//     // console.log("#")
//     for (let j = 0; j < 5 - ii; j++) out += ''
//     for (let k = 0; k <= ii; k++) out += '#'
//     console.log(out)
// }


// for (let z = 0; z <= 10; z++) {
//     console.log(`${z} x ${z} = ${z * z}`)
// }

// console.log("i  i^2 i^3")
// for (let z = 0; z <= 10; z++) {
//     console.log(`${z}  ${z ** 2}   ${z ** 3}`)
// }



let random = 'xkqci4utda1lmbelpkm03rba'

let rand2 = random.split('')
console.log(rand2)

for (let z in rand2) {
    console.log(z)
}

// let r = Math.floor(Math.random() * random)
// console.log(r)

// 11. Print all the elements of array as shown below.


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let g = fullStack.toString()
let arrr = g.split(',')


// for (let gg = 0; gg <= arrr.length - 1; gg++) {
//     console.log(arrr[gg])

// 

fullStack.forEach((ele) => {

    console.log(ele)
})
