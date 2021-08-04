const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const existingData = loadNotes();
    const duplicatedData = existingData.find((data) => {
        return data.title === title
    })
    //check if title is already exist
    if(!duplicatedData) {//mfe4 dulicated
        existingData.push({
            title: title,
            body: body
        });
        saveNote(existingData);
        console.log('new note is added successfully');
    } else {
        console.log('this title is taken');
    }
}

const removeNote = (title) => {
    let loadData = loadNotes();
    //search about title
    const existTitle = loadData.filter(el => {
        return el.title !== title
    });
    if (loadData.length > existTitle.length) {
        console.log(chalk.green.inverse(`note with title ${title} is removed successfully`))
        saveNote(existTitle);
    } else {
        console.log(chalk.red.inverse('this title not exist'));
    }
}
const listNotes = () => {
    console.log(chalk.blue('your notes'));
    const notes = loadNotes();
    const myNotes = notes.forEach(note => {
        console.log(note.title);
    });
}
const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const stringData = bufferData.toString();
        const jsonData = JSON.parse(stringData);
        return jsonData;
    }catch(err) {
        return [];
    }
}
const readNote = (title) => {
    const notes = loadNotes();
    const myNote =  notes.find((note) => {
        return note.title === title
    });
    if(!myNote) {
        console.log(chalk.red.inverse('Note is not exist'));
    } else {
        console.log(chalk.inverse(myNote.title));
        console.log(myNote.body);
    }
}

const saveNote = (note) => {
    const jsonData = JSON.stringify(note);
    fs.writeFileSync('notes.json', jsonData);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}