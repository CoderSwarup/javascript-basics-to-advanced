console.log("For of loop , Promises , Array find , find index , Set , Map");


let arr = [2,4,6,7,8]
for(let i of arr){
  console.log(i);
}


let sentence = "helo sam"

for(let i of sentence){
  console.log(i);
}

let obj = {
  name : "ama",
  age : 22
}

for(let i of Object.values(obj)){
  console.log(i);
}

for(let [key , value] of Object.entries(obj)){
  console.log(key , value );
}


//promises 


function login(){
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      console.log("login...");
      resolve()
    } ,1000)
  })
}

login().then(() =>{
  console.log("All is Done");
})


//array find and findindex

let value = arr.find((value) => {
  return value === 2
})
console.log(value);


let value1 = arr.findIndex((value) => {
  //return value === 4
    return value === 10

})
console.log(value1);




let sets = new Set()
sets.add(333)


console.log(sets);


let maps = new Map()

maps.set(2222222, '333')
console.log(maps);


