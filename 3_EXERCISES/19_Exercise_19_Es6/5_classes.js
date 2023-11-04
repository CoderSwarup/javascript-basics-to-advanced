console.log("classes");


//constructor 

function Name(name,age){
  
  this.name = name
  this.age = age 

this.hi = () => {
  console.log("hiiiiiiiiii");
}
  
}



Name.prototype.Hello = function (){
  console.log("hello dear " + this.name);
}


let SAM = new Name("hello", 22)
SAM.Hello()
SAM.hi()



class Name2 {
  constructor(name,age = 18) {
    this.name = name 
    this.age = age 
  }
  
  
  age2() {
   console.log("hiiiikkj");
  }
  
}



let new1 = new Name2('helo')
new1.age2()