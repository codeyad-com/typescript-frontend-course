// let tupleName: [type1,type2,...]= [value1,valu2,...];

let person:[string,number]=["ali",20];

console.log(person[0]);
console.log(person[1]);


// Tuple Limitations

let pair:[string,number]=["23",3];

// خطا: Source has 3 element(s) but target allows only 2
// pair = ["23",12,true];


// خطا: Type 'number' is not assignable to type 'string'
// pair[0]=100;


// Optional Tuples

type PersonInfo=[string,number,boolean?];

let person1:PersonInfo=["sara",28];
let person2:PersonInfo=["ali",22,true];


// Rest Operator in Tuple

type Contact=[string,...number[]];

const ali:Contact=["ALI",12,34,56,12,45];

console.log(ali[5]);



// ReadOnly Tuples

type Point =readonly [number,number];

const circle:Point=[0,0];


// خطاCannot assign to '0' because it is a read-only property
// circle[0]=12;








