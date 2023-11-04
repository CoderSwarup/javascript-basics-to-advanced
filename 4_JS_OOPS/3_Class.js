"use strict"
console.log("classes");

// create a class

class Bank {
    //variables are called properities
    // function called as methodas


 // How adds properties / variables  in class 

    // customerName ;
    // balance = 0;
    // acnum = Date.now();

    // add variables using constructor()

    constructor(customerName, balance = 0) {
        this.cmname = customerName;
        this.balance = balance;
        this.acnum = Date.now();
    }


    // how to add methods / fucntions() in class

    deposite(ammount) {
        this.balance += ammount
    }

    withdraw(ammount) {
        this.balance -= ammount
    }
}

const Bank1 = new Bank("sam", 1000)
Bank1.deposite(20000)
Bank1.withdraw(2000)
console.log(Bank1);


const Bank2 = new Bank("sammy", 5000)
Bank2.deposite(20000)
Bank2.withdraw(2000)
console.log(Bank2);





a = 766
console.log(a);
