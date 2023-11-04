console.log("Cookies Tutorial")

//get cookies
console.log(document.cookie)


//set cookies
document.cookie = "name=Sammy"
document.cookie = "name2=Sammy22"
document.cookie = "name3=Sammy99999"

//update name 
document.cookie = "name=Sammy33333333"

let key = prompt("Enter cookie key")
let value = prompt(`Enter ${key} cookie value`)


//when you use semicolon (;) not read next data 
//ex s; = 11
//document.cookie = `${key} = ${value}`

//solve semicolon problem
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`


//how to decode 
//decodeURIComponent(//code)


console.log(document.cookie)
