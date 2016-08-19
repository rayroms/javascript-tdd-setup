'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');


describe ("Note creation works properly", function() {
    
    it("assigns author based on the parameter supplied in the constructor", function() {
    	//all notes must assign input author to internal author
         var noteApp = new NotesApplication();
         var aNote = noteApp.create('Hello World', 'Ray');
         // console.log(note0)

         // assert(note0.author !== null);
         // assert(note.notes.length === 2);
         // console.log(note.notes[0]);
         console.log(noteApp.notes.length);
         assert(noteApp.notes[0].author === "Ray" );
    })

    it("Checks that notesapp can correctly store notes to the note list", function() {
        var noteApp = new NotesApplication();         
        assert(noteApp.notes.length == 0) ;
        var aNote = noteApp.create('Hello World', 'Ray');

        assert(noteApp.notes.length == 1);
    })



});


describe ("Notes Application test checks", function() {
    it ("Tests that search function rejects wrong inputs Assigns input value to search notes function and checks that none-string inputs return false", 
        function() {
            var noteApp = new NotesApplication();         
            var aNote = noteApp.create('Hello World', 'Ray');
            
            var search_term = 123;  //should be string, hence function should return false

            assert(noteApp.search(search_term) == false);
    });



    it ("Test that gets function rejects wrong inputs. Assigns input value to get_ notes function and checks that all non-number inputs return false", function() {
        var noteApp = new NotesApplication();         
        var aNote = noteApp.create('Hello World', 'Ray');
        var note_id = 'test'; //should be num, hence function will correctly return false

        assert(noteApp.gets(note_id) == false);
        
    })

    it("Tests that delete works. Checks that length of notelist after insertion and deletion", function() {
        var noteApp = new NotesApplication();         
        var aNote = noteApp.create('Hello World', 'Ray'); //add new note
        assert(noteApp.notes.length == 1);
        var note_id = 0;                             //single note location
       
        noteApp.deletes(note_id) ;               //delete note
        assert(noteApp.notes.length == 0);          //check that notelist is empty
        
    })

    it("Tests edit function. Assigns values to note_id and new_content inputs and checks that respective values are of number and string type", function() {
        var noteApp = new NotesApplication();         
        var aNote = noteApp.create('Hello World', 'Ray'); //add new note        

        var new_note = 123;                  //should be string, hence correct behaviour is to throw error
        var note_id = "test";              //should be num, hence correct behaviour is to throw error 
        noteApp.edit(note_id,new_note);                //delete note
        assert(noteApp.edit(note_id,new_note) == false);  //check edit function rejects wrong inputs
    })

    it("Tests that delete inputs are valid works. Checks that input is a number", function() {
        var noteApp = new NotesApplication();         
        var aNote = noteApp.create('Hello World', 'Ray'); //add new note
        var note_id = "test";                         //input should be string. Function should return false
       
        assert(noteApp.deletes(note_id) == false);          //checks that this is false
        
    })

 });






