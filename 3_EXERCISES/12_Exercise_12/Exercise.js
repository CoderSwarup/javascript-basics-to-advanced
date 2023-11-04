console.log("Error Handling");



try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}


try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log("error is genarate " + err.name)
  console.log(err)
}



try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}



const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()



let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)

try {
  let square = 2 * 2
  console.log(square)
  console.log("Hello, world")
} catch (err) {
  console.log("error is found")
}


let num = 10
console.log(num.toLowerCase())