
console.log(" EXERCISE NO 1")
// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.

const challenge = '30 Days of JavaScript'

// 2. Print the string on the browser console using __console.log()__

console.log(challenge)


// 3. Print the __length__ of the string on the browser console using _console.log()_

console.log("Length of variable is : " + challenge.length)


// 4. Change all the string characters to capital letters using __toUpperCase()__ method

console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method

console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method

// console.log(challenge.substr(7, -1))
console.log(challenge.substring(5))


// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
console.log(challenge.substring(3))

// 8. Check if the string contains a word __Script__ using __includes()__ method
console.log(challenge.includes('Script'))

// 9. Split the __string__ into an __array__ using __split()__ method

console.log(challenge.split(""))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.

let company = 'Facebook , Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company)
console.log(company.split(","))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.

console.log(challenge)
console.log(challenge.replace('JavaScript', 'Python'))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.

console.log(challenge.charAt(15))

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__

console.log(challenge.charCodeAt('j'))

// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript

console.log(challenge.indexOf('a'))


// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let para = 'You cannot end a sentence with because because because is a conjunction'

console.log(para.indexOf('because'))

console.log(" EXERCISE NO 1 IS END THANKS")


console.log("\n EXERCISE LEVEL 2 ")

// 1. Using console.log() print out the following statement:

let quote = `The quote 'There is no \nexercise better for the heart \nthan reaching down and lifting \npeople up.' by John Holmes \nteaches us to help one another.`
console.log(quote)

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num1 = '10'
parseInt('num1')
let num2 = 10
parseInt('num2')
console.log(num1 === num2)


// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseInt('10') == parseInt('10'))

// Check if 'on' is found in both python and jargon

let py = "python"
let js = "jargon"

console.log(py.includes('on') == js.includes('on'))


// 7. Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 101))

// 9. Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random() * 256))

// 10. Access the 'JavaScript' string characters using a random number.
let rand = 'Javascript'

let len = rand.length

let index = Math.floor(Math.random() * len)

console.log(rand[index])

// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let sen = 'You cannot end a sentence with because because because is a conjunction'
console.log(sen.substring(31, 54))





console.log("\n EXERCISE LEVEL 2 IS END ")



console.log("\n EXERCISE LEVEL 3 ")

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.

let paragraph = 'Love is the best thing in this world. love Some found their love and some are still looking for their love.'

console.log(paragraph.match('love'))

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let m = 5000 * 12
let m2 = 15000 * 12
let a = 10000
let total = m + m2 + a
console.log(total + " Euro")


console.log("\n EXERCISE LEVEL 3 is complete")