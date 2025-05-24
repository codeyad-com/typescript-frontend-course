

function multiply(x: number, y: number): number {
    return x * y;
}


function hello(name: string): string {
    return "Hello " + name;
}

function logMessage(message: string): void {
    console.log(message);
}


const showAlert = (message: string): void => {
    alert(message)
};


let greet2: (name: string) => string;


greet2 = function (name: string): string {
    return "hello" + name;
}

greet2 = (name: string): string => {
    return "Hello " + name;
}


type MathFunction = (x: number, y: number) => number;

const add: MathFunction = (x, y) => x + y;
const substract: MathFunction = (x, y) => x - y;


interface Calculator {
    add: (x: number, y: number) => number;
    substract: (x: number, y: number) => number;

    multiply(x: number, y: number): number;
    divide(x: number, y: number): number;
}


const myCalculator: Calculator = {
    add: (x, y) => x + y,
    substract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
}



function buildName(firstName: string = "Ali", lastName?: string): string {

    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}


function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,4,5,6,78));




