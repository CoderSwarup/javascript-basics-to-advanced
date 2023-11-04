//error objects
// 1.   error.name
// 2.   error.message
// 3.   error.stack


//trrow coustom error using throw keyword
 // throw new Error(" error")
 // throw new ReferenceError(" error")




try{
  throw new Error("this is error")
}
catch(err){
  console.log(err.name)
  console.log(err.message)  
  console.log(err.stack)

}



//some sample code 

try{
  let age = prompt("enter your age")
  if (age > 100) {
    throw new Error("Enter age is Invalid")
  }
  else{
    console.log("Your Age is : ",age);
  }
}
catch(err){
    console.log(err.name)
    console.log(err.message)
   // console.log(err.stack)
}
