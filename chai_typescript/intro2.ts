// When function does not return anything
function printError(errmsg: string): void {
    console.log(errmsg);
}

// Exception or error function with never type
function throwError(errmsg: string): never {
    throw new Error(errmsg);
}

printError("This is an error!");

// Uncommenting the following line will throw an error and stop execution
// throwError("Error thrown");

function objectReturn1(): {} { // Return type is any object
    return {};
}

function objectReturn2(): { name: string } { // Return type is object with 'name' compulsory
    return { name: 'Adi' };
}

type ObjectUser = {
    name: string;
    rollno: number;
    isPassed: boolean;
}

const User: ObjectUser = {
    name: "Aditya",
    rollno: 43,
    isPassed: true
}

function createUser1(user: ObjectUser): void { }

function createUser2(user: ObjectUser): ObjectUser {
    return { name: "Adi", rollno: 12, isPassed: false };
}

type MongoUser = {
    readonly _id: string; // readonly
    name: string; // should be a string, not a specific value
    isReady?: true; // optional
}

function createMongoUser(u: MongoUser): void { }

const u: MongoUser = {
    _id: "123455tys",
    name: "helloSingh"
}

// u._id = "1234"; // This will cause an error because _id is readonly


// Multiple types
type cardNumber = {
    cardnumber:string
}
type cardDate = {
    carddate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
} 

const card:cardDetails = {
    cardnumber:"12345678",
    carddate:'12 june',
    cvv:122
}

export {};
