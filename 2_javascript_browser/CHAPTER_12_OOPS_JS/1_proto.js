console.log("__proto__")

let a = {
  name : "sammy",
  age : 18,
  
    hi: () => {
      alert(" self Hello bro")
    }
    
}

console.log(a)


let p = {
  
  hi : () =>{
    alert("Hello bro")
  }
}


//link a proto to p

a.__proto__ = p



//proto is self Priority frist
a.hi()


p.__proto__ = {
  name2 : "Sam"
}


console.log(a.name2)
