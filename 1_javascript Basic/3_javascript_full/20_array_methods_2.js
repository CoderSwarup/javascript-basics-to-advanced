//delete operator 
//delte operator remove index obhect but not effect on length 
let num = [332,3,4,222,66,88, 1 ,2]
delete num[0];
console.log(num)

//concat 
let num2 = [2222,33333]
console.log(num.concat(num2))


//sort //sort alphabatecaly
console.log(num.sort())

//how can i sort array ascending and descending order using create complre function
//sort asending order 
let compare = (a,b) => {
	return a -b;
}
console.log("\nsort ascending order",num.sort(compare))

//sort desending order 
let compare2 = (a,b) => {
	return b -a;
}
console.log("\nsort descending order",num.sort(compare2))

//reverse 
console.log(num.reverse())

//splice() 
//syntax
// .splice[start_index,remove item_num,add_elements......,..,.,]

/*
console.log("\nsplice ",num.splice[2,4,222,333,444,555])
*/


//slice ()
console.log(num.slice(2,4))


