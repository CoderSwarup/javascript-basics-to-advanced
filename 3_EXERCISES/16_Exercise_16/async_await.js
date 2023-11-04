

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("lohin successfully")
      resolve()
    }, 2000)
  })
}



function getdata() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
     // return reject("Error is genarated in function")
      console.log("Featching the data")
      resolve()
    }, 2000)
  })

}

function get() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      
      console.log("Data is gotted")
      resolve()
    }, 1000)
  })
}



async function done(){
  setTimeout(() => {
    console.log(("All is Done "));
  },3000)
}
/*

//async await method 
async function Call(){
  await login();
  await getdata()
  await get()
}

*/
/*

//error handling 
async function Call(){
  await login();
  await getdata()
  await get()
}

Call().then(()=> {
 console.log("All is done");
}).catch((err)=> {
  console.log("error");
})

*/



//error handling method 2 

/*
async function Call(){
  try{
  await login();
  await getdata()
  await get()
  }catch(err) {
    console.log("Error ", err);
    throw new Error("errrrrr")
  }finally{
    console.log("Its a finally ");
  }
}

Call().then(() => {
  console.log("All is done");
}).catch((err)=> {
  console.log(err);
})
*/


/*
async function Call(){
  try{
  await login();
  await getdata()
  await get()
  }catch(err) {
    console.log("Error ", err);
  }finally{
    console.log("Its a finally ");
  }
}

*/



async function Call(){
  console.log("Login data fetching ");
  await login()
  console.log("Data Fetching ");
  await getdata()
  await get();
  //console.log(dj);
  await done()
}

Call()