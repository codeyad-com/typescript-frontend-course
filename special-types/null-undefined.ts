let something:null=null;
let nothing:undefined=undefined;

function greet(name?:string | null){
   if(name===null){
      console.log("hello mr.noname");
   }else{
      console.log(`Hello ${name}`);
      
   }
}


greet();