console.log("Inheritence");


//how inheritance work in constructor 

function BankAcount(CustomerName, Balance = 0) {

    this.CustomerName = CustomerName;

    this.accountNum = Date.now()

    this.Balance = Balance;
}

// constructor methods 
BankAcount.prototype.deposit = function (ammount) {
    this.Balance += ammount
}

BankAcount.prototype.withdraw = function (ammount) {
    this.Balance -= ammount
}


const sam = new BankAcount("sam", 400)
console.log(sam);



// DRY METHOD ==> Donot repeate Your sealf


// create a new constructor

// this all create repeatation // thats why we use inheritance 
function CurrentAcount(CustomerName, Balance = 0) {

    // how inherite properties uing parentconstructor.call(this,........)
    BankAcount.call(this, CustomerName, Balance);
    this.transitionlimit = 50000;
}

// now how to inherite methods of parent constructor 
// if its not defined then methods are not work 
CurrentAcount.prototype = Object.create(BankAcount.prototype)



const swarup = new CurrentAcount("swarup", 400000)
swarup.deposit(555) // throw error if constructor methods are not assing / prototype 
swarup.withdraw(200000)
console.log(swarup);








// how work inheritance with class
class Bank {


    constructor(customerName, balance = 0) {
        this.cmname = customerName;
        this.balance = balance;
        this.acnum = Date.now();
    }


    deposite(ammount) {
        this.balance += ammount
    }

    withdraw(ammount) {
        this.balance -= ammount
    }
}


const sammy = new Bank("sammy", 2000)
console.log(sammy);

// inheritance in class 

class Saving extends Bank {
    transitionlimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);

        // this.transitionlimit = 50000;

    }


    loan(ammount){
        console.log("loan is " + ammount);
    }
}

const s = new Saving("s", 100)
s.deposite(2000)
s.withdraw(1000)
console.log(s);
s.loan(20000)