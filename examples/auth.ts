let username: string = "ali123";
let passowrd: number = 1243;
let isLoggedIn: boolean = false;

if (username === "ali123" && passowrd === 1243) {
    isLoggedIn = true;
}

console.log(`auth state: ${isLoggedIn ? "LOGGED IN" : "LOGGED OUT"}`)
