
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
// const product2 = {
//     id: 2, name: "Mobile", price: 100000, description: "a smartphone", discount: 10
// }


//READONLY OBJECT TYPES
// type User = { readonly id: number, name: string, email: string };

// const user:User = {
//     id: 123,
//     name: "MOHAMMAD",
//     email: "mmdhg@gmail.com"
// }

// user.email="ali@gmail.com";

// user.id=321;


//INDEX SIGNATURES

// interface SomeObject{
//    [key:KeyType] : ValueType
// }


// interface StringDic{
//     [key:string]:string;
// }


// const colors:StringDic={
//     red:'#FF000',
//     green:"#hfg50e",
//     blue:"#sdfgbdsfnl"
// };


// interface NumericDic{
//     [index:string]:number;
// }


// const scores:NumericDic={
//     "ali":9,
//     "mohammad":10,
//     "zahra":8 
// }


// scores["ali"]=7;