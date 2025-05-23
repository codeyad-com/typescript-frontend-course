


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



