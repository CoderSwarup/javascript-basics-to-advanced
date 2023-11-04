console.log("Template Literals , Object Literals , Destructing , Spread Operator , rest operator ");



//template literrals 
let hi = "Sam"
let name = `My name is ${hi} 
Thanks `
console.log(name);



//object literals 

let namekey = 'namekey'
let name1 = "name1"
let namesame = "namesame"
let obj ={
  name : 'sam',
  //computed key Property
  [namekey] : "Laptop",
  
  //
  name3 : name1 , 
  
  //property shorhand 
  namesame,
  
  //method shorthand
  fun(){
    console.log("hello");
  }
  
}

console.log(obj);



//sperade operator

//...



let arr = [2,3,4,5]

let array = [...arr]
console.log(array);



let obj1 = {
  name : 'sam',
  age : 18
}


//passby reference
let newobj = obj1 
newobj.age = 33333
console.log(newobj);
console.log(obj1); //valye change 


/*
//passby value 
let newobj = {...obj1}
newobj.age = 33333
console.log(newobj);
console.log(obj1); //value not change 

*/



//Rest Operator

let add = (...iteams) => {
  console.log(iteams);
  
  let sum = 0;
  for(let i of iteams){
    console.log(i);
    sum += i;
  }
  console.log("Sum is ", sum);
}


add(2,4,57,9)