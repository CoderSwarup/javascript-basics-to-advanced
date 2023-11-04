//javascript string methods

let name = "sammy";

// .length
console.log(name.length)

// .toUpperCase()
console.log(name.toUpperCase())

// .toLowerCase()
console.log(name.toLowerCase())

// .slice()
console.log(name.slice(1,4))
console.log(name.slice(2))

// .replace()
console.log(name.replace("ammy","AMMY"))

// .concat()
let name2 = "harry"
console.log(name2.concat(name))
console.log(name.concat("",name2))
console.log(name.concat(" hello.   ",name2," byeeeee "))


//.trim()
// .trimStart()
// .trimpEnd()
let name3 = "         sammmy      ";
console.log(name3)
console.log(name3.trim())



//print using index (string is immutable)
const name4 = 'sam'
console.log(name4[0])
console.log(name4[1])


//print our name using for loop

for(let i = 0; i<name4.length;i++){
	console.log(name4[i])
}


// .includes()
//return value is true or false
let str = "sam bhai hi"
let st = "sam"
console.log(str.includes(st))

// .padStart()
/*
let text = "5";
console.log(text.padStartt(4,"x"));

###
The padStart() method is a string method.
To pad a number, convert the number to a string first.
###


See the example below.

let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");



//padEnd()

//let text = "5";
let padded = text.padEnd(4,"x");
*/







