
export const hello = (name) => {
    console.log("hello ", name)
}

export const ahello = (name, age) => {
    console.log("hello ", name, " age is ", age)
}


// how you can import this modules 
// small change in package.json create type:"module"

import { hello, ahello } from "./ES6_Modules.js"

hello("sam")
ahello("swarup", 66)