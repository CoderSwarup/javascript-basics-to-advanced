console.log("Prototype")


function BankAcount(CustomerName, Balance = 0) {
   

    this.CustomerName = CustomerName;

    this.accountNum = Date.now()

    this.Balance = Balance;

    // this.deposit = function (ammount) {
    //     this.Balance += ammount;

    // }

    // this.withdraw = (ammount) => {
    //     this.Balance -= ammount;
    // }

}

const sam = new BankAcount("sam",1000)
// const swarup = new BankAcount("swarup",10000)
// console.log(sam,swarup);


// create a prototype for 
BankAcount.prototype.deposit = function (ammount) {
    this.Balance += ammount
}

BankAcount.prototype.withdraw = function (ammount) {
    this.Balance -= ammount
}


sam.deposit(208800)
sam.withdraw(200000)

console.log(sam);


console.log(BankAcount.prototype);


// assing one obj proto to another proto 


let p = {
    name :"hacker"
}
let a = {
    name3 : "harry"
}
console.log(p.name3); // gives undefined
p.__proto__ = a 

console.log(p.name3);