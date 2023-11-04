//console object methods

//show all console.obj
console.log(console)

//show error 
console.error("this is an ereor")

// if value is false give error 
console.assert(223>44)

//Clear all console
console.clear()


const obj = {a:33,b:32,c:455}
//show obj content in table format
console.table(obj)


//show warning message
console.warn("this is warning")

//.info similar like log
console.info("this is info")

//time required to perform particular elements

console.time("time")
let a = 33;
console.log(a)
console.timeEnd("time")
