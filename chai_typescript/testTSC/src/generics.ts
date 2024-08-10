function idenity1(val: number | boolean): number | boolean {
    return val
}

function idenity2(val: any): any {
    return val
}

function idenity3<Type>(val: Type): Type {
    return val
}
idenity3("Aii")
function idenity4<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

const bottle = idenity4<Bottle>({ brand: "Aquafina", type: 500 });

console.log(bottle); // Output: { brand: "Aquafina", type: 500 }

const result = idenity4<string>("Hello");
console.log(result); // Output: Hello



function getProducts1<T>(products: T[]): T {
    const num = 0
    return products[num]
}
const getProducts2 = <T,>(products: T[]): T => {        // ',' indicates generic in React
    const num = 0
    return products[num]
}


interface Database{
    connection:string,
    username:string,
    password:string
}

function getConnection<T extends number,U extends Database>(valOne:T,valTwo:U):Object{
    return {
        valOne,
        valTwo
    }
}

getConnection(121,{
    connection: "conn", 
    username: "user", 
    password: "pass" 
})


interface Quiz{
    name:string,
    type:string
}

interface Courses{
    name:string,
    author:string,
    subject:string
}

class sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}