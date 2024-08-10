// Declares an empty array that will always remain empty
const superHero: [] = []; // always empty array

// Two ways to declare an array of strings
const superHeros1: string[] = [];
const superHeros2: Array<string> = [];

// Adding elements to the string arrays
superHeros1.push("spiderman");
superHeros2.push("spiderman");

// Declaring an array of numbers and adding an element to it
const heroLevel: number[] = [];
heroLevel.push(12);

// Type definition for a user object
type User = {
    name: string;
    isPassed: boolean;
}

// Declaring an array of User objects and adding an object to it
const objectArray: User[] = [];
objectArray.push({
    name: "Arya",
    isPassed: false
});

// Declaring an array of arrays of numbers
const arrOfArr: number[][] = [
    [12, 14]
];

// Union type: variable can be a string or a number
let score: string | number = 45;
score = '12';

// Type definitions for Employee and Admin objects
type Employee = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

// Variable that can hold either an Employee or Admin object
let aditya: Employee | Admin = { name: "Adi", id: 1234 };
aditya = { username: "admin Aditya", id: 998 };

// Variable that can be a string, number, or boolean
const data: (string | number | boolean) = 24;

export {};
