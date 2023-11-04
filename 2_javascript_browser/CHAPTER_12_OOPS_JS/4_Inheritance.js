console.log("Inheritance")

class stu{
  constructor(name, rollno){
    this.name = name
    this.roll = rollno
  }
  
  name(){
    console.log(`${this.name} student Roll No is ${this.rollno}`)
  }
}


//inherit class 

class collagename extends stu{
  clgname(){
    console.log(`${this.name}  Your college Name is : SRM Kudal`)
  }
}


let sam22 = new stu("sam", 33)
console.log(sam22)



let sam2 = new collagename("sam2", 44)
console.log(sam2)
console.log(sam2.clgname())
