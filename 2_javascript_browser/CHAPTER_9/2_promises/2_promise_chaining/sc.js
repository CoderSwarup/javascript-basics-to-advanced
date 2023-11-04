/*
let p = new Promise((resolve , reject) => {
  setTimeout(() => {
    console.log("promise No 1 st is Run after loding 2sec")
    resolve(222)
  },2000)
})

//promise chain
p.then((value) => {
  console.log("promise 1 resolve value is " + value)
  
  //using create direct promise
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise No 2 nd is Run after loding 3sec")
        resolve(333)
      }, 3000)
      })
      
}).then((val) => {
  console.log("promise 2 value is :" + val)
  
  
  //using decalare var and create a promise
  let pp = new Promise((s,r) => {
    setTimeout(() => {
      console.log("promise 3 is run ")   
      s(333333)

    }, 3000)
  })
  
  return pp
}).then((value) => {
  console.log(value)
})
*/

//load script using chain

let loadsrc = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.src = src;


    document.body.appendChild(script)

    script.onload = (script) => {
      console.log("script load successfuly");
      resolve("Lodeed")
    }

    script.onerror = () => {
      reject(0)
    }
  })


}



let p = loadsrc("https://code.jquery.com/jquery-3.4.1.slim.min.js")


p.then((val) => {
  console.log(val)
  return 2
}).then(() => {
  console.log("2nd script is loaded")
})



p.catch((error) => {
  console.log("error is detect")
})
