let bulb = document.getElementById('bulb')

let btn = document.getElementById('btn')

//class = " bulb bulbstop"

//let g = () =>{
//  bulb.classList.toggle("bulbstop");
//}


btn.addEventListener("click",function (){
   bulb.classList.toggle("bulb");
})

