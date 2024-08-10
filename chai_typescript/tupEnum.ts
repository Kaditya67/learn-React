const User : (string|number)[] = [1,"adi"];

const mongoUser:[number,number,boolean]=[1,2,true];

type manyUser=[number,boolean]
const Many:manyUser=[123,true]

Many.push(false)

console.log(Many);

enum seatChoice {
    AISLE = 'aisle',
    MIDDLE=3,
    WINDOW,
    FOURTH
}

const adiSeat = seatChoice.MIDDLE;