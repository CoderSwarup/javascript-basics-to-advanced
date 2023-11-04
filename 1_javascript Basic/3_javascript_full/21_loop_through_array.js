//looping through array
//simple for loop 

let arr = [2,44,3,55,7,8]

console.log("Simple loop : ")
for(let i= 0;i<arr.length;i++){
	console.log(arr[i])
}


//forEach loop
console.log("forEach Loop : ")

arr.forEach((element)=>{
	console.log(element * element)
})

console.log("\nSimple loop 2 : ")

//create a function first
let a = (item) =>{
	console.log(item + item)
}

//use for loop
arr.forEach(a)


//Array.from
let z = "sammy"
let arr2 = Array.from(z)
console.log(arr2)


//for of loop

console.log("\nfor of loop : ")
for(let i of arr){
	console.log(i)
}

//for in loop
console.log("\nfor in loop : ")
for(let b in arr){
	//console.log(b)//output array key values(index)
//	console.log(arr[b])
console.log(b +" : "+ arr[b])
}



