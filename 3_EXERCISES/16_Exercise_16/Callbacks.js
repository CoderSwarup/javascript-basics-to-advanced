console.log("callbacks");

function login(callback){
  setTimeout(()=>{
    console.log("lohin successfully")
    callback()
  },3000)
}
function getdata(callback){
    setTimeout(() => {
      console.log("Featching the data")
      callback()
    },2000)
}

function get(callback){
    setTimeout(() => {
      console.log("Data is gotted")
//callback()
    },1000)
}


//call syncrinusly
/*
login()
getdata()
get()
*/


//callbacks 

login(function(){
  getdata(function(){
    get()
  })
})

//But callback is Callback Hell problems