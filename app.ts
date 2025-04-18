function infiniteLoop():never {
   while (true) {
      console.log("this loop will NEVER end");
   }
}


function throwError(message:string):never{
   throw new Error(message);
}