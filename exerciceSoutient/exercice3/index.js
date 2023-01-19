// Pourcourez le tableau des pizzas. Si la pizza a 3 ingrédients ou moins son prix doit devenir 7.99 si elle a plus de 3 ingrédients son prix doit devenir 8.99. Faites ensuite un console.log() du prix.

let pizzas = [
    {
        name : "Veggie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Mushrooms"
        ],
        price : null
    },
    {
        name : "Meattie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Meat"
        ],
        price : null
    },
    {
        name : "Fishie",
        ingredients : [
            "Tomato",
            "Cheese",
            "Fish"
        ],
        price : null
    },
    {
        name : "Supreme",
        ingredients : [
            "Tomato",
            "Cheese",
            "Meat",
            "Olive"
        ],
        price : null
    }
];

for (let i=0; i<pizzas.length; i++){
    if (pizzas[i].ingredients.length <= 3){
        pizzas[i].price = 7.99
    }
    else{
        pizzas[i].price = 8.99
    }


    console.log(`la pizza ${pizzas[i].name} va couter ${pizzas[i].price} Euros`);

}