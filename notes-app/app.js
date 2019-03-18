const chalk = require('chalk')
const yargs = require('yargs')
// const getNotes = require('./notes.js')

yargs.version('1.0.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // indicates that the title is required
            type: 'string' // defines the parameter type
        },
        body: {
            describe: 'Node body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Adding a new note!', argv.title);
        console.log('Adding a new note!', argv.body);
    }
})

yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    handler: function() {
        console.log('Remove the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('List out all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})

yargs.parse(); // goes to the processing of parsing the parameters
// // add, remove, read, list
// console.log(yargs.argv);
