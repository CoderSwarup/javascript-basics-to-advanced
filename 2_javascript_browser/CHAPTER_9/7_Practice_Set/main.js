//Q1

let loadsrc = async (src) => {
  
  
  return new Promise((resolve , reject) => {
    
  let script = document.createElement("script")
  script.src = src
  
  script.onload = () =>{
    console.log("Script is loded please wait")
    resolve(src)
  }
 
  document.body.appendChild(script)
  })

}

/*

let a = loadsrc("https://code.jquery.com/jquery-3.4.1.slim.min.js")


a.then((value) => {
  console.log(value)
})
*/

//Q2
    console.time("time")

let fun = async () => {
  let a = await loadsrc("https://code.jquery.com/jquery-3.4.1.slim.min.js")
   console.log(a)
}
fun()
  console.timeEnd("time")
