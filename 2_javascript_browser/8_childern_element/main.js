//children of an element
console.log(document.body.firstChild) //give you text node because of space 
console.log(document.body.lastChild)
//simple node

console.log(document.body.childNodes)


//array node 
let arr = Array.from(document.body.childNodes)
console.log(arr)



