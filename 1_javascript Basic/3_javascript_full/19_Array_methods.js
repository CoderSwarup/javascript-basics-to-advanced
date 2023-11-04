//some array methods

let num = [2,3,4,5,6];

// .tostring()
console.log(num.toString());
console.log(typeof num);


// .join()
console.log(num.join("__"));

// pop()//remove last item
console.log("\npop method",num.pop())
console.log(num)

//push()// add item in last
console.log("\npush method",num.push(55))
console.log(num)

//.shift() remove first element
//console.log("\nshift method",num.shift())
let r = num.shift();
console.log("\nshift method ",num)


//unshifted() add new element in first
let rr = num.unshift(999);
console.log("\nunshift method ",num)

