"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// When function does not return anything
function printError(errmsg) {
    console.log(errmsg);
}
// Exception or error function with never type
function throwError(errmsg) {
    throw new Error(errmsg);
}
printError("This is an error!");
// Uncommenting the following line will throw an error and stop execution
// throwError("Error thrown");
function objectReturn1() {
    return {};
}
function objectReturn2() {
    return { name: 'Adi' };
}
var User = {
    name: "Aditya",
    rollno: 43,
    isPassed: true
};
function createUser1(user) { }
function createUser2(user) {
    return { name: "Adi", rollno: 12, isPassed: false };
}
function createMongoUser(u) { }
var u = {
    _id: "123455tys",
    name: "helloSingh"
};
var card = {
    cardnumber: "12345678",
    carddate: '12 june',
    cvv: 122
};
