console.log("promises");


/*
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("lohin successfully")
      resolve()
    }, 2000)
  })
}



function getdata(callback) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      return reject("Error is genarated in function")
      console.log("Featching the data")
     // resolve()
    }, 2000)
  })

}

function get() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log("Data is gotted")
      
    }, 1000)
  })
}


//then for resolve and catch for reject
login()
.then(getdata)
.then(get)
.catch((err) =>{ //error handling 
  console.log("Error : ",err);
})

*/


let loadsrc11 = (src) => {
  return new Promise((resolve, reject) =>
  {

    let script = document.createElement("script")
    
    script.src = src

    document.body.appendChild(script)

    script.onload = () => {
      resolve(1)
    }


    script.onerror = () =>
    {
      reject("Errrrrrrrrrr")
    }
  })


}

let p = loadsrc11("dj.js")



/*
let p =  loadsrc11("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js").then((value ) => {
  console.log(value);
}).catch((err) =>
{
  console.log("Err is " , err);
}
)
*/



/*

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = (script) => {
      resolve("Script has been loaded sir")
    }
    script.onerror = () => { reject(0) }
  })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
  console.log(value)
  return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
  console.log("Second script ready")
}).catch((error) => {
  console.log("We are sorry but we are having problems loading this script")
})
*/