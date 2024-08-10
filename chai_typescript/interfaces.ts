interface miniUser {
    name: string;
    roll: number;
    isActive: boolean;
    startFunc(): number;
    detailFunc(a: number, b: number): string;
}


interface Admin{
    githubLogin:number;
}

interface User extends miniUser,Admin{}

// Correct implementation of the User object
const myObj: User = {
    name: "John", // Assigning a sample name
    roll: 1, // Assigning a sample roll number
    isActive: true, // Assigning a sample active status
    startFunc: () => {
        // Implementing startFunc method
        return 1; // Sample return value
    },
    detailFunc: (a: number, b: number) => {
        // Implementing detailFunc method
        return `Details: ${a} and ${b}`; // Sample return value
    },
    githubLogin:1234,

};

function createUser(): number {
    return 1;
}

console.log(myObj);
console.log(createUser());
