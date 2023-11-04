let a = document.getElementsByTagName('div')[1];
//console.log(a)
//using inner html
//a.innerHTML = a.innerHTML + '<h1> hello world</h1>'

//console.table(document.getElementsByTagName('div')[1])

//create a element
let div = document.createElement('div')

//ser a class
div.className = 'he'
console.log(div);

//innerhtml
div.innerHTML = `<h1> hello world</h1>` 


//some methods 
//1) append 
a.append(div) // append last of en node

//2) prepend
a.prepend(div)

//3) before
a.before(div)


//4) after 
a.after(div)


//5) replace
a.replaceWith(div)
console.log(document.body)
