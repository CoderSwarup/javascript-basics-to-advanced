console.log("day 10 destructing and spereding");



let numarr = [2, 3, 4, 5, 6, 7, 8]

//let [a,b,c,d] = numarr
//console.log(a,b,c,d)

/*
let [a, b, c, d, ...other] = numarr
console.log(a, b, c, d, other)
*/
let [a, , , , ...other] = numarr
console.log(a, other)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
  console.log(country, city)
}

//destructing object 

let obj = {
  n: "sam",
  age: 18,
}

let { n, age } = obj
console.log(n, age)


const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter)



//1. Destructure the countries object print name, capital, population and languages of all countries

/*
const students = [
          ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
          ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
        ]

//console.log(convertArrayToObject(students))
[
  {
    name: 'David',
    skills: ['HTM', 'CSS', 'JS', 'React'],
    scores: [98, 85, 90, 95]
},
  {
    name: 'John',
    skills: ['HTM', 'CSS', 'JS', 'React'],
    scores: [85, 80, 85, 80]
}]


let [s, t, y] = students
console.log(s, t, y);

*/



console.log("Regular Expression")
let regEx= new RegExp('love','gi')
console.log(regEx)


const str = 'I love love JavaScript'
const pattern = /love/

//test
const result = pattern.test(str)
console.log(result)


//match 

const re = str.match(pattern)
console.log(re)


//search

const r = str.search(pattern)
console.log(r)


//replace 
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

console.log(txt);

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)




const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

console.log(text);

matches = text.replace(/%/g, '')
console.log(matches)  