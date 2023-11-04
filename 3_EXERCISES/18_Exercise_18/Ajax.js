console.log("Ajax");


const url = 'https://jsonplaceholder.typicode.com/posts'

let p = new XMLHttpRequest()
//p.responseType = 'json'
//p.open('GET',url)
p.open('POST',url)

p.setRequestHeader('Content-Type', 'application/json')

p.onload = ()=> {
//  console.log(p.response)
console.log(JSON.parse(p.response));
}

p.onerror= () => {
  console.log("Error");
}

body ={
  name: "sam"
}

p.send(JSON.stringify(body))