console.log("day 9 sets and maps ")



//sets 
/*
// empty set 
let Set1 = new Set()
console.log(Set1)
*/

//array toset 
let arr = [2,3,5,4]
let arraytoset = new Set(arr)
console.log(arraytoset)



const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)



let set2 = new Set()
console.log(set2)

set2.add("sam")
console.log(set2)


const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)



let Map1 = new Map()
Map1.set('name' , 'sam')
console.log(Map1)



//Sets and Maps 

//adding elements 

let array =[ "sam","bhai"]
let arset = new Set(array)
console.log(arset)

arset.add("sammy")
arset.delete("sam")
arset.has("bhai")
arset.clear()


//union set 
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

//Map 

let newmap = new Map('name','sam')
countriesMap.set('Finland', 'Helsinki')
console.log(countriesMap.has('Finland'))





