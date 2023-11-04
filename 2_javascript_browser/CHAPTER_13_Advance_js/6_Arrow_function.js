console.log("ARROW FUNCTION")

let sayhello = (name, greeting) => console.log(greeting, " ", name);

sayhello("Swarup", "good Morning");

let obj = {
    name: "sam",
    roll: 666,
    show: function () {
        // without arrow function
        //     let that = this;
        //     setInterval(function () {
        //         console.log(`Your name is : ${that.name} and roll is ${that.roll}`)
        //     }, 3000)



        //with arrow

        setTimeout(() => {
            console.log(`Your name is : ${this.name} and roll is ${this.roll}`)
        }, 3000)
    }
}




obj.show()