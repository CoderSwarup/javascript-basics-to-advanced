console.log("Exercise day 2")

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstname = "swarup"
let lastname = "Bhise"
let country = "India"
let city = "Bhesdshi"
let age = 18
let isMarried = false
let year1 = new Date().getFullYear()


console.log(typeof (firstname))
// age = parseInt('age')
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof (year1))

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('10') == 10)

// 1. Write three JavaScript statement which provide truthy value.
let empty = ''
console.log(typeof (empty))


console.log("Exercise Leve 1 is complete")

console.log("Exercise Leve 2")

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt("Enter a Base : ")
// let height = prompt("Enter a Height : ")

// alert("The area of the Triangle is :" + (0.5 * base * height))

// 1. If the length of your name is greater than 7 say, your name is long else say your name is short.

// let name1 = prompt("Enter your name : ")
// let len = name1.length;

// len > 7 ? console.log(`Name ${name1} is long`) : console.log(`Name ${name1} is short`);


// 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let born = prompt("Enter your born year : ")
// let myage = new Date().getFullYear() - born

// myage > 18 ? console.log("allow for drive ") : console.log("not allow for drive")
// console.log(myage)



console.log(new Date().setFullYear(1990))
// 1672578066248
// 946731697998

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 2020-01-02 07:05

let dd = new Date()
let Y = dd.getFullYear()
let M = dd.getUTCMonth()
let DD = dd.getDate()
let H = dd.getHours()
let S = dd.getSeconds()


let today = `${Y}-${M}-${DD} ${H}:${S}`
console.log(today)