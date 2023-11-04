let p1 = new Promise((resolve , reject) => {
  
  setTimeout(() => {
    console.log("Promise 1");
    resolve(111)
  },2000)
})


let p2 = new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log("Promise 2");
    //resolve(222)
    reject(444)
  }, 300)
})

let p3 = new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log("Promise 3");
    resolve(333)
  }, 1000)
})


/*

p1.then((value) => {
  console.log(value)
})

p2.then((value) => {
  console.log(value)
})

p3.then((value) => {
  console.log(value)
})
*/

//Use Promise Api 

//promise.all() ==> Wait To Run complete all promise if any one is errorthan arror

//let promise_api = Promise.all([p1,p2,p3])


//promise.allSettled ==> wait for all promise to run and show output in Object method 

let promise_api = Promise.allSettled([p1,p2,p3])


//promise.race ==> wait for the any first promise complete
//let promise_api = Promise.race([p1,p2,p3])


//promise.any ==> wait for run first promise if first promise if error than goto second promise
//let promise_api = Promise.any([p1,p2,p3])


//promise.resolve

//let promise_api = Promise.resolve([p1,p2,p3])
//let promise_api = Promise.resolve(99)


//promise.reject
//let promise_api = Promise.reject([p1,p2,p3])
//let promise_api = Promise.all(777)


promise_api.then((value) => {
  console.log(value)
})
