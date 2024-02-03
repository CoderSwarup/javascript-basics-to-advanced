console.log("Hello Using TS and Parcel");

let btn = document.querySelector(".btn") as HTMLButtonElement;
let isRed = false;
btn.addEventListener("click", (e): void => {
  if (isRed) {
    document.body.style.background = "red";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  }
  isRed = !isRed;
});
