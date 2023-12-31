console.log("Getter Setter and stack OverFlow");

// ++++++++++++++++++ Modern Syntax ++++++++++++++++
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return "Password is: " + this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

console.log("Modern SYNTAX");
const swarup = new User("swarup@gmail.com", "abc");

console.log(swarup.password);
console.log(swarup.email);

// +++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++ Property Based getter and Setter ++++++++++++

console.log("\n\nPrototype SYNTAX");

function User1(email, password) {
  this._email = email;
  this._password = password;

  // ++++++ getter Setter For email
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  // ++++++ getter Setter For password

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const swarup2 = new User("swarup2@gmail.com", "abc");

console.log(swarup2.password);
console.log(swarup2.email);

// ++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++ Object Based Getter and Setter +++++++

console.log("\nObject SYNTAX");

const User3 = {
  _email: "john@yahoo.com",
  _password: "xyz",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const sam = Object.create(User3);
console.log(sam.email); // Access
