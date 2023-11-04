console.log("constructor in js");

function BankAccount(name, balance = 0){
  
  this.name = name
  
  this.balance = balance
  
  //inside method its take a extra memory 
  
  this.withdraw = function(ammount) {
    this.balance -= ammount
  }
  
}


//prototype method not take a memory

BankAccount.prototype.depo = function(ammount){
  this.balance += ammount
}


const user1 = new BankAccount("sam", 2000)
user1.withdraw(200)
user1.depo(200)
console.log(user1);



//inherite constructor 
function Saving(name, balance  = 0)
{
  BankAccount.call(this,name,balance)
  
  this.id = Date.now()
}


//inherite constructor methods  /prototypes 
Saving.prototype = Object.create(BankAccount.prototype)


const user2= new Saving("sammy2",222)
user2.withdraw(200)
user2.depo(200)
console.log(user2);


//prototypes 

let a = {
  name:"hydra"
}

let p = {
  name2:"hacker"
}

a.__proto__ = p
//p.__proto__ = a


console.log(a.name2);