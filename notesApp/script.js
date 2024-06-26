
const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');






getNotes().forEach((note) => {

    const noteEl = createNodeEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);


})



btn.addEventListener('click', addNote)





function addNote() {

    const getNote = getNotes()

    const notes = getNote || []

    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    }



    const noteEl = createNodeEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl)


    notes.push(noteObj);

    saveNote(notes)



}




function createNodeEl(id, content) {

    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = "Empty Note";
    element.value = content;



    element.addEventListener('dblclick', () => {
        const warning = confirm('Do you want to delete this note?')

        if (warning) {
            deleteNote(id, element)
        }
    })



    element.addEventListener('input', () => {

        updateNote(id, element.value)
    })


    return element


}


// delete note


function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id)
    saveNote(notes);

    appEl.removeChild(element);

}


// update Note 

function updateNote(id, content) {

    const notes = getNotes()

    const target = notes.filter((note) => note.id == id)[0]
    target.content = content;





    saveNote(notes)
}


function saveNote(notes) {
    localStorage.setItem("noteapp", JSON.stringify(notes))

}

function getNotes() {
    return JSON.parse(localStorage.getItem('noteapp') || "[]")
}