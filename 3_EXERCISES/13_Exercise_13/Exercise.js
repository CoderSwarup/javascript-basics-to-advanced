console.log("JSON IN JS");


let json = {
  "Alex": {
    "email": "alex@alex.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
    "age": 20,
    "isLoggedIn": false,
    "points": 30
  },
  "Asab": {
    "email": "asab@asab.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
    "age": 25,
    "isLoggedIn": false,
    "points": 50
  },
  "Brook": {
    "email": "daniel@daniel.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
    "age": 30,
    "isLoggedIn": true,
    "points": 50
  },
  "Daniel": {
    "email": "daniel@alex.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "John": {
    "email": "john@john.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
    "age": 20,
    "isLoggedIn": true,
    "points": 50
  },
  "Thomas": {
    "email": "thomas@thomas.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  },
  "Paul": {
    "email": "paul@paul.com",
    "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
    "age": 20,
    "isLoggedIn": false,
    "points": 40
  }
}

//console.log(JSON.parse(json))

/*
for(let i in json){
 console.log(i)
  for(let n in json[i]){
    console.log(n ,json[i][n])
  }
}
*/


const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)



const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users,'',2)
console.log(txt) // text means JSON- because json 


let jsonobj = `{
  "name": "sam",
  "lastName":"Bhise"
}`

let convertjson = JSON.parse(jsonobj)
console.log(convertjson)

let convertjson2 = JSON.stringify(convertjson,'',5)
console.log(convertjson2)

//1. Change skills array to JSON using JSON.stringify()

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

console.log(JSON.stringify(skills,'',2))

let age = 250;
console.log(JSON.stringify(age))




const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

/*
console.log(JSON.stringify(student.firstName))
console.log(JSON.stringify(student.skills))
console.log(JSON.stringify(student.lastName))
console.log(JSON.stringify(student))
*/


console.log(JSON.stringify(student,['firstName','lastName','skills'],3))


const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txtt = JSON.stringify(user,['firstName', 'lastName', 'country', 'age'],4)
console.log(txtt)


//1. Parse the *txt* JSON to object.

console.log(JSON.parse(txtt))




const use = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

let con = JSON.parse(use)
console.log(con);


for(let i in con)
{
  console.log(i);
  for(let j in con[i])
  {
  }
    //console.log(con[i].skills + "<br>");
    
    let len = con[i].skills
    let len2 = len
    console.log(len2)

}