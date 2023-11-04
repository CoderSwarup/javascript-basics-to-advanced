//Create a fetch api to show the information abhout coding contest

let url = "https://kontests.net/api/v1/all"
let contest = fetch(url)
contest.then((response) => {
  return response.json()
}).then((response2) => {
  console.log(response2)
  let inhtml = ""
  for (i in response2) {
    console.log(response2[i])

    inhtml += `
        
        <div class="cards">
      <img src="https://source.unsplash.com/random/200x200?sig=1" alt="">
      <div class="card-body">
        <h3 class="card-title">${response2[i].name}</h3>
        <p class="card-text"> Status is ${response2[i].status} and site is ${response2[i].site}</p>
        <p class="card-text"> In 24 Hours? ${response2[i].in_24_hours} </p>
        <p>Starts at: ${response2[i].start_time}</p>
       <p>Starts at: ${response2[i].end_time}</p>
         
        
     <a href="${response2[i].url}" class="btn"> <button type="submit">Visit Contest</button></a>
      </div>
    `
  }


  let cardit = document.getElementById('cantainer3')

  cardit.innerHTML = inhtml

})




/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
