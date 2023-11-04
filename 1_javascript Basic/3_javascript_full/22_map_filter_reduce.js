// map filter reduce 
//map  => create an new array 
// pass 3 argument (value , index ,array)
//only value 
let arr = [2,4,5,6,8]
console.log("\n value ")
let b = arr.map((value) => {
	return value + 1;
})
console.log(b)

//value and index 
console.log("\n value and index")
let bb = arr.map((value,index) => {
	return index;
})
console.log(bb)

//value and index array
console.log("\n value and index and array")
let bbb = arr.map((value,index,array) => {
	return array;
})
console.log(bbb)








//filter
let arr2 = [22,33,44]
let a= arr2.filter((h) => {
	return h<30
})
console.log("\n filter")
console.log(a)



//reduce
console.log("\n reduce ")
//this method perfrom privious two oprends opration to next operand 
let arr3 = [3,4,5,6]
let c = arr3.reduce((h,h1) => {
	return h * h1
})
console.log(c)






// .indexOf()
let arr4 = [2,3,4,44]
console.log("array indexOf " ,arr4.indexOf(4))

