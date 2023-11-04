console.log("IIFE => Immediately Invoked Function Expression");

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(333)
        }, 2000);
    });
}

console.log(a);

//simple async function
/*
let fun = async () => {
    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c)
    let d = await a();
    console.log(d)
}
fun()
*/

//IIFE  function
(
    async () => {
        let b = await a();
        console.log(b);

        let c = await a();
        console.log(c)

        let d = await a();
        console.log(d)
    }
)()