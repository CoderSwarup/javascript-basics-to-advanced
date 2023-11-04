//function
let x = (you , com) => {
// Non-draw conditions
    // Cases covered:
    // sg
    // gs
    // sw 
    // ws
    // gw
    // wg
    
if(you == com){
  return 0;
}

if(you == 's' && com == 'g'){
  return -1;
}
if(you == 'g' && com == 's'){
  return 1;
}
if (you == 'w' && com == 's') {
  return -1;
}
if (you == 's' && com == 'w') {
  return 1;
}
if (you == 'g' && com == 'w') {
  return -1;
}
if (you == 'w' && com == 'g') {
  return 1;
}
}



//choose play or not 
let play = confirm("you want to play 🐍 🌊 🔫 game")


if(play){
  
 //random number generator 
  
  let num = Math.random() * 100
  num = Number.parseInt(num)
  console.log(num)
  let com;


//computer option  
  
if (num < 35) {
 com  = 's'
}
else if(num > 35 && num < 70){
  com = 'g'
}
else{
  com = 'w'
}

//you choose

let you = prompt("enter s-for snake , g-for gun ,w - water ")



if (you == 's' || you == 'g' || you == 'w') {

 let result = x(you , com)

if(result == 0){
  alert("match draw")
  
}
if (result == 1) {
  alert("you win")
}
else{
  alert("you lose")
}

document.write("you chose "+you+" and computer chose "+com)
  }
 
 else{
   document.write("you enter wrong character please enter s g w")
 }
}

