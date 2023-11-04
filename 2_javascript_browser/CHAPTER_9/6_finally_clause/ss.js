

//finally clause

try {
 // console.log("hello ")
  console.log(rr)
} catch (e) {
  console.log(e)
//console.log(pro)
}
finally{//finally run always after program execution and error 
  console.log("run finally")
}



let c = () => {
  console.log("Run insinde a function")
try {
    // console.log("hello ")
    //console.log(rr)
    return
  } catch (e) {
    console.log(e)
    //console.log(pro)
  }
  finally { //finally run always after program execution and error 
    console.log("run finally")
  }
}


c()