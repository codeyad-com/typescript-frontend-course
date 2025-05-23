
type ID = string | number;

let id: ID;

id = 101;

id = "abc123";

// id=true;
// Type 'boolean' is not assignable to type 'string | number'.



function greeting(name: string | undefined | null) {
    if (name) {
        return `hello ${name}`;
    }

    return "hello";
}



greeting(null);
greeting("ALI");
// greeting(true);
// Argument of type 'boolean' is not assignable to parameter of type 'string'



enum Direction {
    Up = "UP", Down = "DOWN"
}

type DirectionByUnion = "UP" | "DOWN";

let direction: DirectionByUnion;

direction = "DOWN";


// Type Guard

function printId(id: ID) {

    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`)
    }


    if (typeof id === "number") {
        console.log(`ID: ${id.toFixed(0)}`)
    }
}


