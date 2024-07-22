let str:string = "hello";
let num:number = 1;

console.log(str);
console.log(num);

function addTwo(a:number, b:number):number{
    return a+b;
}

// function addTwo(a:number, b:number){
//     if(typeof a !== 'number'){
//         return false;
//     }
//     return a+b;
// }

addTwo(1,2);
// addTwo('a','b');


let mulTwo = (a:number, b:number):number=>{
    return a*b;
}

mulTwo(5,6);

let arr = [1,2,3];

arr.map((item):number => {
    return item;
})