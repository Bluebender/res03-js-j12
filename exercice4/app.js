let App = {  
data() {  
        return {  
            notes : []
        }  
    },  
    methods : {  
        addNote (event){
            let noteToAdd = event.target.elements.note.value;  
            this.notes.push(noteToAdd);
            event.target.elements.note.value=""
        },
        RemoveNote (event){
            let noteToRemove = event.target.elements.note.value;  
            
        }
    }  
}
export { App };
