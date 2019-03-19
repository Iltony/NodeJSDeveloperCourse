const yargs = require('yargs')
const notesManager = require('./notes.js')

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
    handler: (argv) => {
        // console.log('Adding a new note!', argv.title);
        // console.log('Adding a new note!', argv.body);
        notesManager.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // indicates that the title is required
            type: 'string' // defines the parameter type
        }
    },
    handler: (argv) => {
        notesManager.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        notesManager.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // indicates that the title is required
            type: 'string' // defines the parameter type
        }
    },
    handler: (argv) => {
        notesManager.readNote(argv.title)
    }
})

yargs.parse(); // goes to the processing of parsing the parameters
// // add, remove, read, list
// console.log(yargs.argv);
