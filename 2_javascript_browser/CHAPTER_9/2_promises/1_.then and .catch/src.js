let p = new Promise((resolve , reject)=> {
  console.log("I am promise No 1")
  
  setTimeout(() => {
    console.log("promise 1 is run and slove")
    resolve(44)
  },4000)
})


let p2 = new Promise((resolve , reject)=> {
  console.log("I am promise No 2")
  
  setTimeout(() => {
    console.log("promise 2 is run and reject")
     reject(new Error("this is a error"))
  },4000)
})
console.log(p2)



/*
//.then()

p.then((value)=>{
  console.log(value)
})


//.catch()
p2.catch((error) => {
  console.log("generated error in p2")
})

*/

p2.then((value)=>{
  console.log(value)
},(error)=>{
  console.log(error)
})


