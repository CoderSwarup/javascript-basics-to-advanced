console.log("Constructor")

//SYNTAX
//constructor()


class student {
  constructor(name, rollno) {
    this.name = name
    this.rollno = rollno
  }

  name() {
    console.log(`${thsi.name} student Roll No is ${this.rollno}`)
  }
}


let sam = new student("Swarup", 5)
console.log(sam)

let sam2 = new student("Swarup999", 5)
console.log(sam2)