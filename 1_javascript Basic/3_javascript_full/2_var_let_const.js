console.log("this is var let const \n");
//var var can be reupdate and re declare by its scope
var a = 33;
var a = 66;
{
	var a = "sammy";
	console.log(a);
}
console.log(a,"\n");

// let can be updated but not redeclare
let b = 44;
//let b = 88; // show error
{
	//updated b
	let b = "ssss";
	console.log(b)
}
console.log(b)


//const : const can neither be updated nor be redeclare
const c = 44444;

//let c = 33;//throw error

//const d;// throw err or always give you value to const variable
console.log(c)







