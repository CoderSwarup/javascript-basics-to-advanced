let a = document.body

console.log(a.firstChild)//give a text



console.log(document.body.firstElementChild);//give particular element 

//access child child
const b = document.body.firstElementChild;
console.log(b.firstElementChild)

const c = b;
console.log(c.firstElementChild.firstElementChild)


//change color baground
let color = () =>{
  b.style.background = "black"
  b.style.color = "white";

}
//in console execute the function color()


//last element child

console.log(document.body.lastElementChild);



