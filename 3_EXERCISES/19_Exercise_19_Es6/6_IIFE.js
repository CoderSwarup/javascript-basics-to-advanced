console.log("iife");


let promise = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I Am promise ");
      resolve()
      console.log(n + "s");
    }, 1000 * n)
  })
};


(
  async () => {
    let a = await promise(2)
    //  console.log(a)
    let b = await promise(4)
    //  console.log(b);
  }
)()

//clousers 

//clouser is function with its lexical environment
function heloo() {
  let p = 2

  function hi() {
    let p = 22
    console.log(p);
  }
  hi()
  console.log(p);
  // return hi
}

//let  re = heloo()
//re()

heloo()


function count(){
  let c= 1
  return function(){
    console.log(c++);
  }
}


//not increase 
count()()
count()()


//increase value 
let cc = count()
cc()
cc()