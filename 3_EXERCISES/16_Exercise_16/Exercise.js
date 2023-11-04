console.log("Promises callbacks ");

let p = new Promise((resolve , reject) =>{
  setTimeout(()=>{
    console.log("hi");
    resolve()
  },2000)
  
})



let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hi2");
    resolve()
  }, 3000)

})


p.then(p2)


const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 4) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
