
interface Animal {
    name: string;
}

interface Animal {
    age: number
}

// interface Animal{
//     name:string,
//     age:number
// }

const cat: Animal = {
    name: "Cat",
    age: 20
}

// ERROR : Duplicate identifier 'Vehicle'

// type Vehicle={model:string};
// type Vehicle={year:number};



// METHOD TYPE IN INTERFACE

// interface Calculator{
//     add(a:number,b:number):number;
// }


// const calculator:Calculator= {
//     add: (a,b)=>a+b,
// }


//NESTED TYPES IN INTERFACES
interface Address{
    street:string,
    city:string,
    postCode:string;
}
interface User {
    name:string,
    contact:{
        email:string,
        phone?:string
    },
    address:Address
}

const user: User = {
    name: "حسین",
    contact: {
        email: "hossein@example.com",
        phone: "09123456789"
    },
    address: {
        street: "خیابان آزادی",
        city: "تهران",
        postCode: "1234567890"
    }
};

