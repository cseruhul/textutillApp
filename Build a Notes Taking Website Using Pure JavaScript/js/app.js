// console.log("My Javascript is working.");

showNotes(); //The function will call while relode this page.

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  if (addText.value != "") {
    noteObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addText.value = "";
    console.log(noteObj);
  } else {
    window.alert("Please input something to add note.");
  }

  showNotes();
});

/*Functions to show from local storage. */
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  let html = "";
  noteObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
  });

  let notesElem = document.getElementById("notes");

  if (noteObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `
            <h2>No notes found. Add Some notes.</h2>
        `;
  }
}

/*Function to delete a  note*/
function deleteNote(index) {
  console.log("I am deleting....", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}

/*Searching Functionality  */

let search = document.getElementById("searchText");

search.addEventListener("input", function () {
  let inputValue = search.value.toLowerCase();
  console.log("search event listener called", inputValue);

  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardText = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    if (cardText.includes(inputValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
