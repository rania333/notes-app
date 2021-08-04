const chaclk = require('chalk');
const yargs = require('yargs');
const {addNote, removeNote, listNotes, readNote}  = require('./notes.js');
//setup yargs to add new command
yargs.command({
    command: "add",
    description: "add new note",
    builder: {
        title: {
            descripe: 'title note',
            demandOption: true, //to make it required param
            type: 'string'
        },
        body: {
            descripe: 'body note',
            demandOption: true, //to make it required param
            type: 'string'
        }
    },
    handler: (arg) => {
        addNote(arg.title, arg.body);
    }
});
yargs.command({
    command: "delete",
    description: "delete note",
    builder: {
        title: {
            descripe: 'title note',
            demandOption: true, //to make it required param
            type: 'string'
        }
    },
    handler: (arg) => {
        removeNote(arg.title);
    }
});
yargs.command({
    command: "list",
    description: "list notes",
    handler: (arg) => {
        listNotes();
    }
});
yargs.command({
    command: "read",
    description: "read note",
    builder: {
        title: {
            descripe: 'title note',
            demandOption: true, //to make it required param
            type: 'string'
    }},
    handler: (arg) => {
        readNote(arg.title)
    }
});
yargs.parse(); //lazem a3mlha 3l4an lw hb3t aktr mn key msln title w body y6b3o
