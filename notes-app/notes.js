const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatedNote = notes.find(n => n.title === title)

    if (!duplicatedNote) {
        notes.push({
            title, body
        })
   
        saveNotes(notes)
        console.log(chalk.green.inverse('Note created'));
    } else{
        console.log(chalk.red.inverse('Note title already exists'));
    }    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(n => n.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Notes removed'))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
        
}

const listNotes = () => {
    notes = loadNotes()
        
    if(notes.length > 0){
        console.log(chalk.blue.inverse('THIS ARE YOUR NOTES'));
        notes.map(n => printNote(n))
    } else {
        console.log(chalk.red.inverse('No notes found'));
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(n => n.title === title)

    if (note) {
        console.log(chalk.blue.inverse('YOUR NOTE'));
        printNote(note)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }        
}

const printNote = (note) => {
    console.log(chalk.blue(note.title + ' - ' + note.body))
}

const loadNotes= () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        // In case of failure because the file does not exists for ex.
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}