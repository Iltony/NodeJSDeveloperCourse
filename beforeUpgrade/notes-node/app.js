const fs = require('fs')
const r = require('ramda')
const yargs = require('yargs')
const notes = require('./notes')
var titleArg= {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}
var bodyArg={
    describe: 'The body for the note',
    demand: true,
    alias: 'b'
}
var argv = yargs
    .command('add', 'add the note', {
        title= titleArg,
        body=bodyArg
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleArg
    })
    .command('remove', 'remove a note', {
        title: titleArg
    })
    .argv




var command = process.argv[2]

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log('Note created')
        printNote(note)
    } else {
        console.log(`Note title taken`)
    }
} else if (command === 'remove') {
   var noteRemoved = notes.removeNote(argv.title)

   console.log(noteRemoved ? 'Note removed' : 'Does not exist a note with this title')
} else if (command === 'read') {
    var note = notes.readNote(argv.title)

    if(note){
        notes.logNote(note)
    } else {
        console.log(`Note not found`)
    }
} else if (command === 'list') {
    var allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
    
} else {
    console.log('command not recognized')
}

