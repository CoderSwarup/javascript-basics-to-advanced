console.log("Pactice");

//q 1 ==> print given word after 2 sec
let word = (text) => {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })

    return p;
}


(
    async () => {
        let txt = await word("hello");
        console.log(txt)
        let txt2 = await word("hello2");
        console.log(txt2)

    }
)()



// q2 => find avg of ARRAY obj
let arr = [2, 2, 2];
let obj = { ...arr }
console.log(obj)

let avg = (obj) => {
    console.log(obj)
    let len = Object.keys(obj).length;
    console.log("obj len is : ", len)
    sum = 0;
    for (let i = 0; i < len; i++) {
        sum += obj[i];
    }
    console.log("sum is : ", sum)

    let avg = sum / len;
    console.log("avg is : ", avg)
}

avg(obj)