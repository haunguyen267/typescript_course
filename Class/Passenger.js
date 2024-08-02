var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("Jone", "Smith", 2);
for (var item in passenger) {
    // if(passenger[item] instanceof Function) { continue }
    console.log(passenger[item]);
}
// passenger.display();
