/*
//Synchronous
let a = prompt("enter your name");
console.log(a.length)


//Asynchronous 
setTimeout(() => {
  alert("your name length is "+ a.length)
},500)

*/

//callbacks

//callback function
function Fun(src , callback){
  let script = document.createElement("script")
  script.src = src;
  
  script.onload = () => {
    console.log("script is loaded : "+ src);
    callback();
  }
  
  //if script through error
  
  script.onerror = () =>{
    console.log("errorrr"+src)
  }
  document.head.appendChild(script)
}


//another function
function hello(){
  alert('hello word is print')
}


//call the callback function
Fun("https://code.jquery.com/jquery-3.4.1.slim.min.js",hello)
