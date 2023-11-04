//always use this method to access element
let a = document.getElementById("sammy")

//attributes methods

//1) hasattribute
console.log(a.hasAttribute("width")); //true 
console.log(a.hasAttribute("height")); //false

//2) getattribute
console.log(a.getAttribute("width")); 

//3) setattribute
console.log(a.setAttribute("height","22px"))

//4) removeatteibite
console.log(a.removeAttribute("class"))

//5) element.attribites
console.log(a.attributes)

//6) data- attributes
//access our own attributes
console.log(a.dataset)

//access praticular dataset attribute
console.log(a.dataset.sam2)
