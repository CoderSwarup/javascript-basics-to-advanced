//let sam = "Sammy"

setTimeout(() =>  {
  console.log("Wifi Hack Process Will be Start...")
},1000)


//console.log(sam + " Wifi")//if any through error program exicution will be stop here 

//try catch
try{
  console.log(sam + " Wifi")//if error then catch and program execution next 
}
catch(error){
  console.log("Wifi Error")
}


setTimeout(() =>  {
  console.log("Wifi Data Fetch...")
},3000)

setTimeout(() =>  {
  console.log("S***y Your Wifi Password is Fetched ...")
},4000)


setTimeout(() =>  {
  console.log("Wifi Hacked ☠️☠️☠️☠️⚠️⚠️⚠️")
},6000)


//try catch work only synchronously so you can handle asynchronous you can use try in settime..function
/*try{
  setTimeout(() => {
    console.log(sam)
  },1000)
}
catch(error){
  console.log(error)
}*/

  setTimeout(() => {
    try{
    console.log(sam)
    }catch(error){
  console.log(error+" is filing")
}

  },1000)

