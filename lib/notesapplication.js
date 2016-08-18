// NotesApplication class

module.exports = function() {
	
	this.notes = [];


	var create = function (note_content,author){
		if(typeof note_content === 'string' || typeof author === 'string'){
			this.author = author;
			this.notes.push(note_content);
		}
	}
	
	var create = function(){
		return false;
	}

	
	var listNotes  = function (){
		
		var arr = this.notes; //get notes array 
		
		for(var c = 0; c < arr.length; c++){
			var label = "Notes ID: " + c  + "\n" + arr + "\n\n" + "By Author " + this.author + "\n\n\n";
			console.log(label);
		}
	}
	
	
	var delete_ = function (note_id){

		delete this.notes[note_id];
	}
	
	var get_ = function (note_id){
		if(typeof note_id === 'number'){
			var str = this.notes[note_id]
			return str.toString;
		}
		return false;
	}
	
	
	var search = function (search_text){
		if(typeof search_text === 'string'){
			var arr = this.notes; //get notes array 
			console.log(arr);
			var title = 'Showing results for search' +" < " + search_text + " >" +"\n\n"; 
			var LabelToRet = title;
			
			for(var c = 0; c < arr.length; c++){
			var locationInStr = arr.join().indexOf(search_text); //search if a string is present
				
				if(locationInStr != -1){
					var label = "Notes ID: " + "[" + c + "]" + "\n" + "- " +arr[c] + "\n\n" + "By Author " + this.author + "\n\n";
					
					LabelToRet = LabelToRet.concat(label) 
					
				}
			}
		
			return LabelToRet;
		}

		return false;
	}
		
		
	
	var edit = function (note_id, new_content) {
		if(typeof note_id === 'number' || typeof note_content === 'string' ){
			var g = this.notes[note_id] = new_content;
			return g;
		}
		return false;
	}

}



}