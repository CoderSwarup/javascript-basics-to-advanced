let addbtn = document.getElementById("addbtn");
shownotes();
// let notesobj;

//function to add notes

addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addtitle = document.getElementById("addtitle");

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let myobj = {
    title: addtitle.value,
    txt: addtxt.value,
  };

  notesobj.push(myobj);

  localStorage.setItem("notes", JSON.stringify(notesobj));

  addtxt.value = "";
  addtitle.value = "";
  console.log(notesobj);
  shownotes();
});

//function to show to notes

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = " ";
  notesobj.forEach(function (element, index) {
    html += `
   
     <div class="c" id="notecard">
        <h1 id="n">${element.title}</h1>
        <p class="para notes">${element.txt}</p>
        
        <button id="${index}"" onclick="deleteNote(this.id)" type="submit">Delete Note</button>
      </div>`;
  });

  let notesele = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesele.innerHTML = html;
  } else {
    notesele.innerHTML = `Add Your notes`;
  }
}

// function to delete notes
function deleteNote(index) {
  console.log("delete", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));

  shownotes();
}

// let searchtxt = document.getElementById('searchtxt')

// searchtxt.addEventListener("input", function () {

//   let inputvalue = searchtxt.value
//   // console.log("fire: ",inputvalue);

//   let notec = document.getElementsByClassName('c')

//   Array.from(notec).forEach(function (element) {
//     let cardtxt = document.getElementsByClassName('para')[0].innerTextt;

//     //console.log(cardtxt)
//   })

// })
