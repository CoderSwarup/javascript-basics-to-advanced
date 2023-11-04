console.log("Encapsulation means private properties and methods");

// so wecan use encapsulation means cannot change class properties outside of class
// use _ before initialize variable in js 

// but ins now es6 new private properties is # brfore variable #var_name

class Bank {

    // every time here decalare a variable to store a priveta
    #balance;


    constructor(customerName, balance = 0) {
        this.cmname = customerName;
        // this._balance = balance; before ES6 private methods but its not work 
        this.#balance = balance;
        this.acnum = Date.now();
    }


    deposite(ammount) {
        this.#balance += ammount
    }

    withdraw(ammount) {
        this.#balance -= ammount
    }

    // access aproperty of private methods acess
    // this all methods are public methods on properties
    // setbalance(ammount) {
    //     if (isNaN(ammount)) {
    //         throw new Error("Enter a correct ammount")
    //     }
    //     this.#balance = ammount
    // }

    // getbalance(){
    //     return this.#balance;
    // }

    // also we can use setters and getters methods on properties 

    set balance2(ammount) {
        if (isNaN(ammount)) {
            throw new Error("Enter a correct ammount")
        }
        this.#balance = ammount
    }

    get balance1(){
        return this.#balance;
    }

    // private method on methods 

    
    
}

// inheritance in class 

class Saving extends Bank {
    transitionlimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);

        // this.transitionlimit = 50000;

    }

    // private methods are create using #before_constructor_name
    #loan(ammount) {
        console.log("loan is " + ammount);
    }

    name(name,ammount){
        console.log(name);
        this.#loan(ammount); // call methods 
    }
}


const s = new Saving("s", 100)

// noe its not work //s.balance = 5000000 // youcan edit easily change but its not good practice

// s.setbalance(200) // public methods on variables 
// console.log(s.getbalance()); // use for public methods on properties


// getters and setters method on properties
s.balance2 = 2000000
console.log(s);
console.log(s.balance1);

// s.loan(500) // gives error because of private methods 
s.name("sam",100) // calls methopds 