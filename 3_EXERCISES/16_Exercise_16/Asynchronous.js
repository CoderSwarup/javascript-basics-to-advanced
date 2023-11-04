console.log("Asynchronous javascript");

//Settineout 

console.log("Setimeout");
/*
setTimeout(()=>{
  console.log("Iam Settimeout FUNCTION CALL after 3sec")
},3000)
*/

//setimeoyt with agruments

const sum = (a,b) =>{
  console.log(a+b);
}

setTimeout(sum,3000,2,4)


//cleartimeout


let a = setTimeout(sum,5000,2,33)

clearTimeout(a);
console.log(a);
console.log("End");


//setinterval
//let i = 0
setInterval(()=>{
  console.log("hello after every 1s ",);
},1000)


//setinterval with function parameter 
setInterval(sum,2000,33,55)

//clearinterval

let b = setInterval(()=> {
  console.log("Hi");
},2000)

clearInterval(b)
console.log(b);