console.log("Call ");

function SetUsername(username) {
  this.username = username;
  console.log("called ");
}

function createUser(username, age) {
  //   SetUsername(username); // this is call by value only not refrence

  // call method is use
  SetUsername.call(this, username);

  this.age = age;
}

let sam = new createUser("sam", 22);
console.log(sam);
