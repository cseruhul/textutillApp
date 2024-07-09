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

});