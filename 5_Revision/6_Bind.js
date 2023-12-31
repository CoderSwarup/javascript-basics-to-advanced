console.log("Bind In JS");

class React {
  constructor() {
    this.libary = "React";
    this.server = "http://localhost:3000";

    // Requirement
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("clickerd");
    console.log(this.libary); // if we not pass bind then it give undefined
    console.log(this.server); // same here
    console.log(this); // but here give the button refrence
  }
}

const app = new React();
