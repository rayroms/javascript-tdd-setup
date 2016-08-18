'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe("Note creation works properly", function() {
    
    it("assigns author based on the parameter supplied in the constructor", function() {
    	//all notes must assign input author to internal author
         var note = new Note("Hello world", "Chidiebere");   
         assert(note.author == "Chidiebere" );
	
    })

    it("increments the note list as notes are added", function() {
        var note = new Note("Hello world", "Chidiebere");
        var noteapp = new NotesApplication();
        assert(noteapp.notes.length == 0) ;
        
        var noteapp.create(note.author, note.notes);
        assert(noteapp.notelist.length == 1);
    })



})


describe("Notes Application test checks", function() {
    it("Tests that search function rejects wrong inputs Assigns input value to search notes function and checks that none-string inputs return false", function() {)
        var note = new Note("Hello world", "Chidiebere");
        var noteapp = new NotesApplication();
        var search_term = 123;  //should be string, hence function should return false

        assert(noteapp.search(search_term) == false);
    })

    it("Test that get_ function rejects wrong inputs. Assigns input value to get_ notes function and checks that all non-number inputs return false", function() {
        var note = new Note("Hello world", "Chidiebere");
        var noteapp = new NotesApplication();
        var note_id = 'test'; //should be num, hence function will correctly return false

        assert(noteapp.get_(note_id) == false);
        
    })

    it("Tests that delete works. Checks that length of notelist after insertion and deletion", function() {
        var note = new Note("Hello world", "Chidiebere"); //test note
        var noteapp = new NotesApplication();
        //delete this.notes[note_id];
        var noteapp.create(note.author, note.notes);    //add new note
        var note_id = 0;                             //single note location
        var noteapp.delete_(note_id) ;               //delete note
        assert(noteapp.notelist.length == 0);  //check that notelist is empty
        
    })

    it("Tests edit function. Assigns values to note_id and new_content and checks that respective values are of number and string type", function() {
        var note = new Note("Hello world", "Chidiebere"); //test note
        var noteapp = new NotesApplication();
        var new_note = 123                  //should be string, hence correct behaviour is to throw error
        var note_id = "test";              //should be num, hence correct behaviour is to throw error 
        noteapp.edit(note_id,new_note);                //delete note
        assert(noteapp.edit(note_id,new_note) == false);  //check edit function rejects wrong inputs
    })
})






