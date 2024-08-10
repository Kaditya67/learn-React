var User = [1, "adi"];
var mongoUser = [1, 2, true];
var Many = [123, true];
Many.push(false);
console.log(Many);
var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "aisle";
    seatChoice[seatChoice["MIDDLE"] = 3] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 4] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 5] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var adiSeat = seatChoice.MIDDLE;
