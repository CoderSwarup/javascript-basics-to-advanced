console.log("Hello Using TS and Parcel");
let btn = document.querySelector(".btn");
let isRed = false;
btn.addEventListener("click", (e)=>{
    if (isRed) {
        document.body.style.background = "red";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "#fff";
        document.body.style.color = "#000";
    }
    isRed = !isRed;
});

//# sourceMappingURL=index.377278e2.js.map
