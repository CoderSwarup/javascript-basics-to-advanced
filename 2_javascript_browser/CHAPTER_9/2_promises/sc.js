let promise = new Promise(function(resolve,reject){
  alert("hello im promise");
//  resolve(55)
  reject(44)
})

console.log(promise)


//asynchronous programing 


setTimeout(() => {
  console.log("im hello after 3 sec")
},3000)

/*
let promise = new Promise(function(resolve, reject) {
        alert("Hello")
        resolve(56)
})

console.log("Hello One")
setTimeout(function() {
        console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)
*/
