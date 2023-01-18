let App = {  
data() {  
        return {  
            animal : "Dogs" 
        }  
    },  
    methods : {  
        changeAnimal() {
            if (this.animal === "Dogs"){
                this.animal = "Cats";
            }
            else{
                this.animal = "Dogs";
            }
        },
            }  
}
export { App };