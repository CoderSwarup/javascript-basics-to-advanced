let g = document.getElementsByClassName('gg')[0];

let n = document.getElementById('h')

n.addEventListener("click", function(f){
  g.innerHTML = "hello bhai"
  
})

n.addEventListener("click", (e) => {
  console.log(e.target)
  console.log(e.clientY)
  alert("hello bhi 222")
})


let gg = document.getElementsByClassName('hi')[0];

let nn = document.getElementById('H')

let x = () => {
  alert("hello bhia kya hua")
}

let z = prompt("enter 1 or 2");
if (z== "1") {
  nn.addEventListener("click",x)
}
else{
  nn.removeEventListener("click",x);
}