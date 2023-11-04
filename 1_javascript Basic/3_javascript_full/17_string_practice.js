//chapter 4 practice

// .include()
let str = "sammy bhai hello"
let sh = "sammy"
console.log(`the word "${sh}" ${str.includes(sh) ? ' is ' : 'is not'} present in str`)


console.log(str.slice(11))
//console.log(str.slice())

//.startsWith()
//return true or false
console.log("\n");
console.log(str.startsWith("sammy"));
console.log(str.startsWith("y"));
console.log(str.startsWith("y",4));


// .endsWith
console.log(str.endsWith("bahi"))
