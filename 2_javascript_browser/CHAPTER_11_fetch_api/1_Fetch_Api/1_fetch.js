document.cookie = "name=Sammy"
console.log("Fetch api");


//syntax 

let promise = fetch("https://goweather.herokuapp.com/weather/Ny")//fetch is a one promise 
promise.then((Response) => {
  
  console.log(Response.status)//if it code return 200 - 299 the api is correct
  
  console.log(Response.ok)//true if code is 200 -299 
  
  console.log(Response.headers)//all headers value is stores 
  
  
  //use only one body meththod of he following else give error
 // console.log(Response.text)
  return Response.json()
}).then((value) => {
  console.log(value)
})
