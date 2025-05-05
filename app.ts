<<<<<<< HEAD

//OBJECT TYPE SIMPLE
// let student : {name:string,age:number} = {name:"ali",age:30};

//OBJECT TYPE USING TYPE
// type StudentType = { name: string, age: number };
// let student: StudentType = { name: "ali", age: 30 };

//OBJECT TYPE USING INTERFACE
// interface Person {
//     name: string;
//     age: number;
// }
// let student: Person = { name: "Mohammad", age: 12 };



//OPTIONAL PROPERTIES
// interface Product{
//     id:number,
//     name:string,
//     price:number,
//     description?:string;
//     discount?:number;
// }

// const product1:Product = {
//     id: 1, name: "laptop", price: 22000000
// }
// const product2:Product = {
//     id: 2, name: "Mobile", price: 100000, description: "a smartphone", discount: 10
// }


type User = { readonly id: number, name: string, email: string };

const user:User = {
    id: 123,
    name: "MOHAMMAD",
    email: "mmdhg@gmail.com"
}

user.email="ali@gmail.com";

user.id=321;
=======
// let tupleName: [type1,type2,...]= [value1,valu2,...];

let person:[string,number]=["ali",20];

console.log(person[0]);
console.log(person[1]);

>>>>>>> 7da7c133d60ba3931dcc5609db2d5c05b73b19c9
