console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}


//own object 
function Obj(givenName){
    this.name = givenName
}

//set own prototype to the pbject 
Obj.prototype.getName = function (){
    return this.name;
}


Obj.prototype.setName = function (newName){
  this.name = newName;
}


let obj2 = new Obj("Rohan Das");
console.log(obj2);
 
