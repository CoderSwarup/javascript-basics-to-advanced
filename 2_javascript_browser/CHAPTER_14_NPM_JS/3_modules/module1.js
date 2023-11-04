const hello = (name) => {
    console.log("hello ", name)
}

const ahello = (name, age) => {
    console.log("hello ", name, " age is ", age)
}

module.exports = { hello, ahello };  // same as followwing line
// module.exports = { hello: hello, ahello: ahello };