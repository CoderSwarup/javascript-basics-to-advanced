/*async function sam(){
  return 555
  }
  
let a = sam()
a.then((val)=>{
  console.log(val)
})
*/


async function weather(){
  
  let mumbaiWheathe = new Promise((resolve) => {
    
    setTimeout(() => {
      resolve("29 Deg")
    } , 2000)
  })
  
  
  let GoaWheathe = new Promise((resolve) => {

    setTimeout(() => {
      resolve("20 Deg")
    }, 5000)
  })
  
  
 // mumbaiWheathe.then(alert)
//  GoaWheathe.then(alert)
  
  console.log("Featching Mumbai weather")
  let mumW = await mumbaiWheathe
 console.log(" Mumbai weather is : " + mumW + "\n")

  console.log("Featching Goa weather")
  let goaW = await GoaWheathe
 console.log(" Goa weather is : " + goaW + "\n")
  return [mumW , goaW]
 }
 
//console.log("Welcome weather Room")
//weather()
//console.log(w)



//function 2 

let hello = async () => {
  console.log("Hello world")
}


// main function store 2 function

let main = async () => {
  console.log("Welcome Weather App")
setTimeout( async () => {
   
  console.log("Welcome weather Room")
  let w = await weather()
  
  console.log("Welcome Hello Room")
  let h = await hello()
} ,4000)
}


//run main function
main()
