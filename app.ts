//Numeric Enums

// enum Directions{
//     Up= 1,
//     Down = 3,
//     Left = 10,
//     Right
// }

// let myDirection:Directions=Directions.Up;

// console.log(myDirection);

// console.log(Directions.Left);
// console.log(Directions[1]);


// console.log(Directions[Directions.Up]);



//String Enums

enum Directions {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions["Left"]);

enum Roles {
    User = "USER",
    Admin = "ADMIN",
    ContectCreator = "CONTENT_CREATEOR"
}



const user1 = {
    name: "mohammad",
    age: 32,
    role: Roles.User
};

// console.log(user1);





//Heterogeneous Enums



enum HeterogeneousExample{
    No=0,
    Yes="YES"
}

console.log(HeterogeneousExample.No);
console.log(HeterogeneousExample.Yes);

