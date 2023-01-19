// Parcourir le tableau, pour chacune des relations faites un console.log() du nom de la personne, puis un console.log() de chacun de ses ami-e-s.

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

    console.log(`${relationships[i].name} a pour ami(e)s :`);
    
    for (let j=0; j<relationships[i].friends.length; j++){
        console.log(`- ${relationships[i].friends[j]}`)
    }
}