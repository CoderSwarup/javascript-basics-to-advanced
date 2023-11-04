console.log("Local Global and Function Scope in Js");

// var => global scope
// let / const = block level scope

//Ex global scope 

{
    var a = 77;
}
console.log("global scope var :", a)


{
    let b = 77;
    console.log("block scope :", b)
}
// console.log("block scope :", b) // => throught error


// function scope

function s() {
    var fun = 7777;
    console.log("Inside function funtion scope : ", fun);
}
s()
// console.log(fun) // => thriugh errors