var str = "hello";
var num = 1;
console.log(str);
console.log(num);
function addTwo(a, b) {
    return a + b;
}
// function addTwo(a:number, b:number){
//     if(typeof a !== 'number'){
//         return false;
//     }
//     return a+b;
// }
addTwo(1, 2);
// addTwo('a','b');
var mulTwo = function (a, b) {
    return a * b;
};
mulTwo(5, 6);
var arr = [1, 2, 3];
arr.map(function (item) {
    return item;
});
