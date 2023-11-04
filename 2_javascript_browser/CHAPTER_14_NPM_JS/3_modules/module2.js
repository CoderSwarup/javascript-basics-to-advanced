// without destructing
const hello = require("./module1")
hello.hello("sam")
hello.ahello("sam", 33)

// using destructing 
const { hello, ahello } = require("./module1")
hello("sam")
ahello("sam", 33)
