const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)     
    } catch (e) {
      return []   
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))    
}

var addNote = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title, 
        body
    }    
    var duplicateNote = notes.filter(note => note.title === title)
    
    if(duplicateNote.length===0){
        notes.push(note)
        saveNotes(notes)
        return note
    }
}
 
var removeNote = (title) => {
    console.log('removing Note', title)
    var originalNotes = fetchNotes()
    var notes = originalNotes.filter(note => note.title !== title) 
    saveNotes(notes)

    return notes.length !== originalNotes.length
}

var getAll = () => {
    return fetchNotes()
}

var readNote = (title) => {
    var notes = fetchNotes()
    var filtredNotes = notes.filter(note => note.title === title)

    if (filtredNotes.length > 0) {
        return filtredNotes[0]
    }    
}

var logNote = (note) => {
    debugger
    console.log('--')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    addNote,
    removeNote, 
    getAll, 
    readNote, 
    logNote
}