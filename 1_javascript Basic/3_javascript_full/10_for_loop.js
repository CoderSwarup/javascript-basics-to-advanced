//for loop
//syntax ;
/*
for(statement1; statement2; statement3){
	//code 
}*/

for(let i=0; i<10;i++){
	console.log(i+1);
}

//sum of 10 natural number
//let a = prompt("enter number");//only run browser
let sum = 0;
for(let i=0; i<10;i++){
	sum += i;
}

console.log("total sum is : "+sum,"\n");


//n factorial
let factn = 1;
for(let i=0; i<10;i++){
	factn *= i+1;
}

console.log("factorial is : "+factn);






