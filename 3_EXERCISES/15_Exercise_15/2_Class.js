console.log("classes");

class Bank{
  
//static methods
 static id = 1
  constructor(name,balance= 0)
  {
    console.log(this);
    this.name= name
    this.balance = balance
    this.id = Bank.id++
  }
  
  //methods
  
  deposite(ammount){
    this.balance += ammount
  }
}

const user3 = new Bank("swarup",2000)
user3.deposite(2)
console.log(user3);


const user4 = new Bank("swarup1", 3000)
user3.deposite(2)
console.log(user4);


//class inheritance 

class current extends Bank{
  constructor(name,balance=0)
  {
    super(name, balance);
    console.log("hello");
  }
  
   
}


const user5 = new current("swarup", 2000)
user5.deposite(2)
console.log(user5);




// private class encapsulation


class private1{
  #name;
  constructor(name)
  {
    this.#name = name
  }
  
 // getname(){
//   console.log(this.#name);
//  }
  

  
  //private methods 
  
  #getname(){
     console.log(this.#name);
  }
  
    setname(name)
  {
   // console.log("hi");
    return this.#name = name

  }
  
  name(){
        this.#getname()

  }
  
  
  static adds(a, b) {
    // body...
    console.log(a + b);
  }
  
}

const u = new private1("sma")
console.log(u);
//u.getname()
u.setname("hello");
//u.getname()
u.name()

private1.adds(25,5)
