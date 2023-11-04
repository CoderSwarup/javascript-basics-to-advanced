console.log("Date in javascript ")

const date = new Date()
console.log(date)

// setInterval function

let d = document.getElementById('date')
setInterval(() => {
    d.innerHTML = `${new Date()}`
}, 1000)



// 7. Use the Date object to do the following activities
//    1. What is the year today?
//    2. What is the month today as a number?
//    3. What is the date today?
//    4. What is the day today as a number?
//    5. What is the hours now?
//    6. What is the minutes now?
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.


// getting full year
console.log(" year is : " + date.getFullYear())

// getting full month
console.log("Month is : " + date.getMonth()) // 0 -11 januuary to december



// getting date
console.log("Date is : " + date.getDate())

// getting day
console.log("Date is : " + date.getDay()) //Sunday is 0, Monday is 1 and Saturday is 6


// getting hours
console.log("hours is : " + date.getHours())

// getting minutes
console.log("minutes is : " + date.getMinutes())

// getting seconds
console.log("seconds is : " + date.getSeconds())

// getting minutes
console.log("millseconds is : " + date.getMilliseconds())


//Getting time 
// this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

console.log(new Date().getTime())
console.log(Date.now())

let passed = new Date().getTime()


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date2 = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date2}/${month}/${year} ${hours}:${minutes}`)


console.log("their are all date methods ")