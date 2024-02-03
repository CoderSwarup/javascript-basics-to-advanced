"use strict";
console.log("Hi");
// Get All the elements
let UserInput = document.querySelector("#userinput");
let Form = document.querySelector(".form");
let MainContainer = document.querySelector(".Main-Container");
// Fetch User Data
async function FetchUserData(url) {
    MainContainer.innerHTML = `<h3>Loading....</h3>`;
    const Response = await fetch(url);
    const data = await Response.json();
    //   console.log(data);
    const dataArray = Array.isArray(data) ? data : [data];
    return dataArray;
}
// Show The Result
function ShowResult(result) {
    MainContainer.innerHTML = ``;
    console.log(result);
    if (result.length === 0) {
        MainContainer.innerHTML += `No user found.`;
        return;
    }
    result.forEach((elem) => {
        let ProfileCard = document.createElement("div");
        ProfileCard.classList.add("ProfileCard");
        ProfileCard.innerHTML = `
    <img src=${elem.avatar_url} alt=${elem.avatar_url} />
      <div class="text">
      <h2>${elem.login}</h2>
      <a href=${elem.url}>Check Out Profile</a>
      </div>
      `;
        MainContainer.appendChild(ProfileCard);
    });
}
// Default Function Fetch Data
function FetchedData() {
    FetchUserData(`https://api.github.com/users`).then((data) => {
        setTimeout(() => {
            ShowResult(data);
        }, 2000);
    });
}
FetchedData();
// Search The Data
Form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const UserInputValue = UserInput.value.toLowerCase();
    if (UserInputValue == "") {
        return FetchedData();
    }
    FetchUserData(`https://api.github.com/users/${UserInputValue}`).then((data) => {
        ShowResult(data);
    });
});
