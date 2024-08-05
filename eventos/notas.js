const notes = [
    { id: 1, titulo: "Sacar la basura", texto: "Mi mamá me va a retar si no lo hago", realizada: false },
    { id: 2, titulo: "Estudiar JavaScript", texto: "Practicar las funciones y eventos", realizada: false },
]

let idGlobal = notes.length

const notesContainer = document.getElementById('notes-container')
const noteTitleInput = document.getElementById('note-title')
const noteTextInput = document.getElementById('note-text')
const addNoteButton = document.getElementById('add-note')
const clearFieldsButton = document.getElementById('clear-fields')
const filterTextInput = document.getElementById('filter-text')
const filterCompletedCheckbox = document.getElementById('filter-completed')

function renderNotes(array) {
    notesContainer.innerHTML = ''
    if (array.length === 0) {
        notesContainer.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>'
    } else {
        array.forEach(nota => {
            const noteCard = document.createElement('div')
            noteCard.classList.add('note-card')
            noteCard.innerHTML = `
                <h3>${nota.titulo}</h3>
                <p>${nota.texto}</p>
                <input type="checkbox" onClick="markCompleted(${nota.id})" ${nota.realizada ? 'checked' : ''}> Realizada
                <button onClick="borrarNota(${nota.id})">Borrar Nota</button>
            `;
            notesContainer.appendChild(noteCard)
        });
    }
}

function addNote() {
    const title = noteTitleInput.value.trim()
    const text = noteTextInput.value.trim()

    if (title && text) {
        idGlobal++
        notes.push({ id: idGlobal, titulo: title, texto: text, realizada: false })
        renderNotes(notes)
        clearFields()
    }
}

function borrarNota(id) {
    const noteIndex = notes.findIndex(nota => nota.id === id)
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
        renderNotes(notes)
    }
}

function markCompleted(id) {
    const note = notes.find(nota => nota.id === id)
    if (note) {
        note.realizada = !note.realizada
        renderNotes(notes)
    }
}

function clearFields() {
    noteTitleInput.value = ''
    noteTextInput.value = ''
}

function filterNotes() {
    const text = filterTextInput.value.toLowerCase()
    const showCompleted = filterCompletedCheckbox.checked

    let filteredNotes = notes.filter(nota => nota.titulo.toLowerCase().includes(text) || nota.texto.toLowerCase().includes(text))

    if (showCompleted) {
        filteredNotes = filteredNotes.filter(nota => nota.realizada)
    }

    renderNotes(filteredNotes)
}

addNoteButton.addEventListener('click', addNote)
clearFieldsButton.addEventListener('click', clearFields)
filterTextInput.addEventListener('input', filterNotes)
filterCompletedCheckbox.addEventListener('change', filterNotes)

renderNotes(notes)
