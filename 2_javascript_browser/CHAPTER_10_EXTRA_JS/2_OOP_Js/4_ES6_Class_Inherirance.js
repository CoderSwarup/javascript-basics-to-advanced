//ES6 classes is alternative of Object Prototype

class Employee{
  constructor(name , salary){
    this.name = name ;
    this.salary = salary;
  }
  
  myname(){
    console.log(`My Name is ${this.name}`)
   // return `My Name is ${this.name}`

  }
  
  //static function means this function create using class but not takes the argument of this class 
  static add(a,b){
    return a + b
  }
}




let sam = new Employee("sam", 50000)
console.log(sam)


//Inherit new class from Employee class 

class programmer extends Employee{
  constructor(name , salary , language){
    super(name , salary)
    this.lang = language
  }
  
  favlang(){
    return `my fav Language is ${this.lang}`
  }
  
  
 
  }
  
let sam2 = new programmer("sam", 50000 ,"c++")
console.log(sam2.favlang())
  








/*

console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));



*/
