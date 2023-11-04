console.log("Static Methods");

//utilities functions

class user {
    static id = 1;
    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = user.id++;
    }

    // static sortfun(a, b) {
    //     return a.age - b.age
    // }


    // static sortfunincome(a, b) {
    //     return a.income - b.income
    // }

    // not use this. keword in static methods if its not both static 


    static add(a, b) {
        console.log(a + b);
    }

    // automatically call at first time 
    static {
        console.log("sammmmmmmm");
    }

    static callid() {
        console.log(this.id); // here we can use this beacause of both static 

    }
}
// user.id = 666;
console.log(user.id);
const sam = new user("sam", 22, 4000)
const sammy = new user("sammy", 222, 1000)
const swarup = new user("swarup", 18, 2100)

console.log(sam, sammy, swarup,);

user.add(2, 8) // static method call using only by classname.staticmethod
user.callid()

// static function

// const users = [sammy, sam, swarup]

// // users.sort((a,b) =>  a.age - b.age)
// // users.sort(user.sortfun)
// // users.sort(user.sortfunincome)
// console.log(users);

