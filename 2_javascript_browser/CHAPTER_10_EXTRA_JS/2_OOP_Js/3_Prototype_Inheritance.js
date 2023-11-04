//creates the object 

let proto = {
  slogan : function(){
    console.log("This is My Learning Process")
  },
  Newname : function(Name){
    this.Name = Name;
  }
}

//creates a object
let sam = Object.create(proto)
sam.name = "sammy"
sam.role = "programer"
sam.collage = "SRM"
sam.Newname("Swarup Bhise")
console.log(sam)


//also use following methods

let sam2 = Object.create(proto, {
                        // writable use for use function in prototype
  name : {value : "sam2" , writable: true},
  age : {value : 18}
})
sam2.Newname("smmm")
console.log(sam2)






//Now we create A Inheritance constructor
//create a employee constructor

console.log("This is Inheritance Method ")

function Employee(name , salary , experience){
  this.name = name
  this.salary = salary
  this.experience = experience
}

//create a function prototype using employee constructor

Employee.prototype.myname = function(){
  return `My Name Is ${this.name}`
}

//create an object for Employee Constructor

let samobj = new Employee("sammy", 200000, 2)
console.log(samobj)


//create programeer constructor using Employee constructor

function programer(name , salary, experience , languages){
  Employee.call(this, name, salary ,experience)
  this.languages = languages
}

//now inharit myname() prototype
programer.prototype = Object.create(Employee.prototype)


//manually set constructor 
programer.prototype.constructor = programer;

//creta programmer object 
let sammy = new programer("swarup", 300000,4,"C ,C++ , Html , CSS")
console.log(sammy)
