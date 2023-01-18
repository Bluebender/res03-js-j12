let App = {  
data() {  
        return {  
            notes : []
        }  
    },  
    methods : {  
        addNote (event){
            let noteToAdd = event.target.elements.note.value;
            let noteObjectToAdd = {text: noteToAdd, done: false};
            this.notes.push(noteObjectToAdd);
            event.target.elements.note.value=""
        },
        removeNote (note){
            console.log(note.done);
            note.done = true;
        }
    }  
}
export { App };