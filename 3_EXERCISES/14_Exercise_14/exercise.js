console.log("Web Storage ")





//cookies

console.log(document.cookie);

document.cookie = "name=sammy"


document.cookie = "name22=sammy"


//note not set multiple cookies

document.cookie = "nam=sam;nameee=smrei"


//set multiple cookie not avaible 
document.cookie = "hi=sjsjsi: djdusu=djdjd"


//using promt

let name3 = prompt("Enter name")
let age22 = prompt("Enter age ")

//document.cookie = `${name3} = ${age22}`

document.cookie = `${encodeURIComponent(name3)
} = ${age22}`


//decodeURIComponent // decode the value see


console.log(document.cookie);


//local storage setitem
localStorage.setItem('age', 200)


const skills1 = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills1, undefined, 4)
localStorage.setItem('skills1', skillsJSON)


/*l
l pl pl lp
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills,'',3)
localStorage.setItem('skills', skillJSON)
console.log(localStorage)

*/
//getiteam

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills2 = localStorage.getItem('skills')
console.log(firstName, age, skills2)