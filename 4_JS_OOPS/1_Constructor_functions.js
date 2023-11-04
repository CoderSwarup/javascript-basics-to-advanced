console.log("Constructor")


//constructor 

// use function name 1st leter capital word
function BankAcount(CustomerName, Balance = 0) {
    // in constructor variables is called properties

    this.CustomerName = CustomerName;

    this.accountNum = Date.now()

    this.Balance = Balance;

    // function is called as Methods
    // this not use in real world its cver in nheritanc 
    this.deposit = function (ammount) {
        this.Balance += ammount;

    }

    this.withdraw = (ammount) => {
        this.Balance -= ammount;
    }

}


// create a new constructor  object
// you can create a multiple object   Every new bject data store is saperate


// const sam = new BankAcount("Sammy", 10000)
// const swarup = new BankAcount("Swarup");


// // you change the value " But this type Cannot use in Real life"
// // swarup.Balance = 3000000

// // call methods ==> its a function in constructor
// sam.deposit(5000)
// sam.withdraw(2000)



// console.log(sam, swarup);

//******************

const storeaccounts = [];


const form = document.getElementById('form')
const cname = document.getElementById('customername')
const balanceac = document.getElementById('balnace1')


//form deposite 
const depoform = document.getElementById('depoform')
const Acnum = document.getElementById('AccountNumber')
const addbalance = document.getElementById('addammount')



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAcount(cname.value, +balanceac.value)
    storeaccounts.push(account)

    // console.log(cname.value);
    console.log(storeaccounts);
})

depoform.addEventListener('submit', (e) => {
    e.preventDefault()

    const account = storeaccounts.find(
                (account) => account.accountNum === +Acnum.value
            );

    account.deposit(+addbalance.value)

    console.log(storeaccounts);
})




// ####################################################



// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function (amount) {
//         this.balance += amount;
//     };

//     this.withdraw = (amount) => {
//         this.balance -= amount;
//     };
// }





// const accounts = [];
// const accountForm = document.querySelector('#accountForm');
// const customerName = document.querySelector('#customerName');
// const balance = document.querySelector('#balance');

// const depositForm = document.querySelector('#depositForm');
// const accountNumber = document.querySelector('#accountNumber');
// const amount = document.querySelector('#amount');

// accountForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const account = new BankAccount(customerName.value, +balance.value);
//     accounts.push(account);
//     console.log(accounts);
// });

// depositForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const account = accounts.find(
//         (account) => account.accountNumber === +accountNumber.value
//     );
//     account.deposit(+amount.value);
//     console.log(accounts);
// });


