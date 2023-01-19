// Parcourir le tableau des relations, pour chacune des relations, faites un console.log() du nom de la personne et un console.log() du nom de chacun de ses ami-e-s réciproques. (A est ami-e avec B ET B est ami-e avec A).

let relationships = [
    {
        name : "Sarah",
        friends : ["John", "Sophie"]
    },
    {
        name : "John",
        friends : ["Sophie", "Simon"]
    },
    {
        name : "Simon",
        friends : ["John", "Sophie", "Sarah"]
    },
    {
        name : "Sophie",
        friends : ["John", "Sarah"]
    }
];


for (let i=0; i<relationships.length; i++){

    for (let j=0; j<relationships[i].friends.length; j++){
        
        let couple = relationships[i].name + relationships[i].friends[j]
        console.log(`${relationships[i].name} - ${relationships[i].friends[j]}`)
        console.log(couple)
        if (relationships[i].name + relationships[i].friends[j] === relationships[i].friends[j] + relationships[i].name){
            console.log("coucou")
        }
        
    }
}