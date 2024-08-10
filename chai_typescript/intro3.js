"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declares an empty array that will always remain empty
var superHero = []; // always empty array
// Two ways to declare an array of strings
var superHeros1 = [];
var superHeros2 = [];
// Adding elements to the string arrays
superHeros1.push("spiderman");
superHeros2.push("spiderman");
// Declaring an array of numbers and adding an element to it
var heroLevel = [];
heroLevel.push(12);
// Declaring an array of User objects and adding an object to it
var objectArray = [];
objectArray.push({
    name: "Arya",
    isPassed: false
});
// Declaring an array of arrays of numbers
var arrOfArr = [
    [12, 14]
];
// Union type: variable can be a string or a number
var score = 45;
score = '12';
// Variable that can hold either an Employee or Admin object
var aditya = { name: "Adi", id: 1234 };
aditya = { username: "admin Aditya", id: 998 };
// Variable that can be a string, number, or boolean
var data = 24;
