// Parcourez le tableau et pour chacun des users, faites un console.log() de son firstName.

let users = [
    {
        firstName : "Teddy",
        lastName : "Roosevelt"
    },
    {
        firstName : "Barack",
        lastName : "Obama"
    },
    {
        firstName : "Donald",
        lastName : "Trump"
    }
];

for (let i=0; i<users.length; i++){
    console.log(users[i].firstName);
}