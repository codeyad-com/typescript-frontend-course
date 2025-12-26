//Type Casting - Type Assertion


let someValue:unknown = "این رشته است";

let strLength:number = (someValue as string).length;

let strLength2:number  = (<string>someValue).length;


