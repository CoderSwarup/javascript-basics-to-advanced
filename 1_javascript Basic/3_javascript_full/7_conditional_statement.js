//input output 

//get input from the user using prompt
/*
let a = prompt("Enter your age : ");
console.log(a);*/

//get alert message on screen
//alert("hello bhai")

//how to convert string to number 
let a = "55";
console.log("before converting : "+(typeof a))
a = Number.parseInt(a);
console.log("after converting : "+typeof a)


/*if(a > 20){
	//alert("your number is greater than 20")
}*/


//conditional statement
// 1) if 

let d = 22;
if(d < 30){
	console.log("number is less than 30 and number is "+d,"\n");
}

//2) if..else
let c = 33;
if(c == 333){
	console.log("number is same");
}
else{
	console.log("Number is not same");
}

//3) else if 
const s = 33;
if((s>0) && (s<=10)){
	console.log("number beetwen 0 to 10");
}
else if((s>=11) && (s<=40)){
	console.log("number beetwen 11 to 40");
}
else{
	console.log("number greater than 40");
}


