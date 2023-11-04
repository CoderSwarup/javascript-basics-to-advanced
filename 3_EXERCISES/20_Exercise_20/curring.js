console.log("Hello");



let add = (a) => {
  return function(b) {
    if (b) return add(a + b);
    return a
  }
}

let a =add(2)(3)
console.log(a);


//console.log(localforage);