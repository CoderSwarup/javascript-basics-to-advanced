
//multiple handelers attached to promise

let p = new Promise((resolve) => {
  console.log("promise is ready to run")
  resolve(33)
})


p.then((val) => {
  
  console.log("handeler 1 is run ")
  console.log(val)
  
}).then((val2) =>{
  console.log("handeler 1 .then() is run ")
  
})



p.then((val3) => {
  console.log("handeler 2 is run successfully")
})
