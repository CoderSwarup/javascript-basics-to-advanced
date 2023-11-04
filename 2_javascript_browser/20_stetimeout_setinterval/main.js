//setTimeout 
//    its use to Any task after given time 

//alert("heloo bhai")
//its run imidiatly but you want its run after sometime you can use setTimeout function

let b = setTimeout(()=> {
  alert("heloo bro")
}, 3000)

//how to stop this settimeout 
clearTimeout(b)







//example 

let sum = (a,b) => { 
 document.write("Sum of ",a," , ",b," is : ",(a + b))}

let a = setTimeout(sum,4000,4,5)



//setInterval
//.       its use to any task repetatly after some time 

let c = setInterval( () => {
  alert("🤣set interval iritet you🤣")
},2000)

setTimeout(() => {
  clearInterval(c)
  alert("🥰setInterval is stop sorry for irritating")
},10000)
