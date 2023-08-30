module.exports=(app)=>{
    const vehicle =require('./controller');

    //create a new note
    app.get('/api/create',vehicle.create);
    
//     //retrive all notes
//     app.get('/api/notes',notes.findAll);

//     //retrive a single note by id
//     app.get('/api/find/:noteId',notes.findone);

//     //retrive all notes by a particular author
//     app.get('/api/findauthor/:author',notes.findbyauthor);

//     // retrive all notes by the note title
//     app.get('/api/findbytitle/:title',notes.findbytitle);

//     //update a note with noteId
//     app.put('/api/update/:noteId',notes.update);

//     //delete a Note with noteId
//     app.delete('/api/delete/:noteId',notes.delete);
}