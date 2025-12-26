//ACCESS MODIFIERS


//PUBLIC

class Person {
    public name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public sayHello() {
        console.log(`سلام اسم من ${this.name}و سن من ${this.age}`);
    }

}


const student = new Person("Javad", 24);

// student.name="Ehsan";
// student.age=26;
// student.sayHello();



//PRIVATE

class BankAccount {
    public accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }


    public deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(amount + " Deposit");

        }
    }



    public getBalanace(): number {
        return this.balance;
    }
}

const account=new BankAccount("12345",1000);

console.log(account.accountNumber);

account.deposit(500);

console.log(account.getBalanace());



