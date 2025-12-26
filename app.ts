class Animal {

    protected animalName: string;

    constructor(animalName: string) {
        this.animalName = animalName;
    }


    makeSound(): void {
        console.log("صدای نامشخص...");
    }


    eat(): void {
        console.log("در حال عذا خوردن " + this.animalName);
    }
}


class Mammel extends Animal {
    hasFour: boolean;


    constructor(animalName: string, hasFour: boolean) {
        super(animalName);
        this.hasFour = hasFour;
    }


    giveBirth() {
        console.log(`${this.animalName} به فرزندش شیر میدهند`);
    }
}


class Cat extends Mammel {
    breed: string;


    constructor(animalName: string, breed: string) {
        super(animalName, true);
        this.breed = breed;
    }

    sound() {
        console.log(this.breed);

    }
}


const cat1=new Cat("Leo","Mio Mio");

const animal1=new Animal("Wolf");

cat1.giveBirth();

cat1.sound();

