console.log("Dom Manipulation");


//Basic Manupulation
/*

let elem = document.getElementsByTagName('span')


//innerHTML

elem[0].innerHTML = "JavaScript C C++"

// css selector 

elem[0].style.fontSize = '100px'
elem[0].style.color = 'red'


//class add remove


elem[0].classList.add('add')

console.log(elem[0]);

elem[0].classList.remove('add')



console.log(elem[0]);
*/


//advance Manipulation

let element = document.getElementById('Admanipulation')

//create Element 
/*

let createelem = document.createElement('h1')
createelem.innerHTML = "Hello"

console.log(createelem);

let createelem2 = document.createElement('h3')
createelem2.innerHTML = "Hello"



//append child 





element.appendChild(createelem)
element.appendChild(createelem2)

*/

//insertAdjacentHTML

//let createelem3 = document.createElement('h1')
//createelem3.innerHTML = "Inser at position"


element.insertAdjacentHTML('beforebegin','<p>beforebegin</p>')

element.insertAdjacentHTML('beforeend','<p>beforeend</p>')

element.insertAdjacentHTML('afterbegin','<p>afterbegin</p>')

element.insertAdjacentHTML('afterend','<p>afterend</p>')



const div = document.getElementsByClassName('dd')
console.log(div[0]);


