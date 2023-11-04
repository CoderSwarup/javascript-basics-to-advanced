console.log("closures")

message = "hello"
function hello1() {

    message = "good mornings"
    {
        let message = "sam"
        console.log("hello1 " + message)
    }

    //closures
    let c = function nw() {
        console.log("IM In nw function", message); // => retun message is reletive function

    }

    c()
}
hello1()