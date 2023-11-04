//HTML Web Storage Objects:-
//console.log(window.localStorage);
console.log(window.sessionStorage);

//create a Entire
let key = 'Entry_1';
localStorage.setItem(key, 'Sammy');


//reading item
let myItem = localStorage.getItem(key);
//console.log(myItem)


//Updating New Entries
localStorage.setItem(key, 'New Value');
myItem = localStorage.getItem(key);
console.log(myItem)



//removing particula item
localStorage.setItem('key2', 'New Valu222');
let myItem2 = localStorage.removeItem(key);


//clear everything
localStorage.clear();




// Create item:
//Storing JSON Objects:- Only strings can be stored with localStorage or sessionStorage, but we can use JSON.stringify to store more complex objects and JSON.parse to read them. Here is an example:
// Create item:

let myObj = { name: 'Harry', language: 'JavaScript' };
localStorage.setItem('harry', JSON.stringify(myObj));
// Read item:
let item = JSON.parse(localStorage.getItem('harry'));
