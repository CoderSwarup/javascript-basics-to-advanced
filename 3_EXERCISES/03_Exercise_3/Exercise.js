console.log("Day 3 conditionals if , if..else , if..elif..else , switch")

// ### If

// In JavaScript and other programming languages the key word _if_ is to used check if a condition is true and to execute the block code. To create an if condition, we need _if_ keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

// ```js
// // syntax
// if (condition) {
//   //this part of code runs for truthy condition
// }



// ### If Else

// If condition is true the first block will be executed, if not the else condition will be executed.

// ```js
// // syntax
// if (condition) {
//   // this part of code runs for truthy condition
// } else {
//   // this part of code runs for false condition
// }



// ### If  Else if Else

// On our daily life, we make decisions on daily basis. We make decisions not by checking  one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use *else if* when we have multiple conditions.

// ```js
// // syntax
// if (condition) {
//      // code
// } else if (condition) {
//    // code
// } else {
//     //  code

// }




// ### Switch

// Switch  is an alternative for **if else if else else**.
// The switch statement starts with a *switch* keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution  does not go down after the condition is satisfied.  The default block runs if all the cases don't satisfy the condition.

// ```js
// switch(caseValue){
//   case 1:
//     // code
//     break
//   case 2:
//    // code
//    break
//   case 3:
//    // code
//    break
//   default:
//    // code
// }
// ```



// 1. Write a program which tells the number of days in a month.

let month = prompt("Eneter month name : ")
month = month.toLowerCase()
console.log(month)

if (month == 'januray' || month == 'march' || month == 'may') {
    console.log(`31 day in ${month}`)
}
else if (month == 'february') {
    console.log(`28 day in ${month}`)

}