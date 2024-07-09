console.log("My Javascript is working.")

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(e){
    let addText = document.getElementById('addText') ;
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addText.value = "";
    console.log(noteObj);

    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    let html = "";
    noteObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element + 1}</p>
                <button class="btn btn-primary">Delete Note</button>
            </div>
        </div>
`
    });

    let notesElem = document.getElementById('notes');
    
    if(notesElem != 0){
        notesElem.innerHTML = html;
    }

}