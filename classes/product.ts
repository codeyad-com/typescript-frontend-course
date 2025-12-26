class Product{
    id:number;
    name:string;
    price:number;
    isAvailable:boolean=true;
    tags:string[]=[];

    constructor(id:number,name:string,price:number){
        this.id=id;
        this.name=name;
        this.price=price;
    }


}

const prodcut1=new Product(1,"laptop",120000);
prodcut1.tags.push("Gadget","tachnology");
