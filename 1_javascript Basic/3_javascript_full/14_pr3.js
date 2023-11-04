//chapter 3 practice set

const marks = {
	 shubham : 300,
	 sam: 500,
	 sammy : 480
}


for(let a in marks){
	console.log("marks of "+a +" is "+marks[a])
}

//using simple for loop

console.log("\nusing for loop")
for(let i=0;i<Object.keys(marks).length;i++){
	console.log("marks of "+Object.keys(marks)[i]+" is : "+ marks[Object.keys(marks)[i]])
}