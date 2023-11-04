//getter and setters 

class stu{
  
  constructor(name){
    this.name = name;
  }
  
  yname(){
    console.log(`Hello bro ${this.name}`)
  }
  
  //getter and setter
  
  get newname(){
    return this._newname;
  }
  
  set newname(name){
    return this._newname
  }
}


let a = new stu("sam")
a.yname()
console.log(a.name)

a.name = "sammy"
console.log(a.name)


//instanceof operator 
let c = 55;
console.log(a instanceof stu)//true 
console.log(c instanceof stu)//false
