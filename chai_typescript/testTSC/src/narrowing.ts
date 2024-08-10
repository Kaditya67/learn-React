function logValue(x: Date | string) {
    if (x instanceof Date) {  // let date = new Date          // any instance of any type can be found with instanceof
        console.log(x.toUTCString());
    } else {
        console.log(x.toLowerCase());
    }
}


type Fish = {
    swim: () => void
}

type Bird = {
    swim: () => void
}

function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        console.log("Pet is a Fish");
    }else{
        pet
        console.log("Pet is Bird");
    }
}


interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square| Rectangle;

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return shape.radius*Math.PI*2;
    }
    // return 4*shape.side;
}


function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2;
        case "square":
            return shape.side*shape.side;
        case "rectangle":
            return shape.length*shape.width;
        default:
            const _defaultForShape:never=shape
            return _defaultForShape
    }
}