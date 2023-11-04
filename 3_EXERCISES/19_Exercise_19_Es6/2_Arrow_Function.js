console.log("Arrow Function");

/*

const fun = () => {
  //code 
}

const add = (a,b) => console.log(a+b);
add(3,5)

const add2 = a => console.log(a + 1);
add2(3)


//this object refers window object
console.log(this);


*/

/*
//this on function
//its refer this object
let obj = {
  //similar value : function ()
  value(){
    console.log(this);
  }
}

obj.value()



//this on arrow function
//its refer this windos obj
let obj = {
  //similar value : () =>
  value : () => {
    console.log(this);
  }
}

obj.value()


*/

let btn = document.getElementById('btn')

/*
let obj = {
  price : 100,
  call : function(){
    let self = this
    btn.addEventListener('click' , function(){
      console.log(this);
      //console.log(this.price)// undefine
      console.log(self.price);
    });
  },
}

obj.call()
*/


let obj = {
  price : 100,
  call : function(){
  
    btn.addEventListener('click' , () => {
      console.log(this);
      console.log(this.price);
    });
  },
}

obj.call()