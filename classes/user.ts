class UserProfile {
    username: string;
    email: string;
    bio?: string;
    age?: number; 
    
    constructor(username: string, email: string) {
        this.username = username;
        this.email = email;
    }
}

const user222= new UserProfile("ali_222","ali@gmail.com");

user222.age=11;
user222.bio="a police";




