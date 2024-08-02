class Passenger {
  firstName: string;
  lastName: string;
  frequentFlyerNo: number;

  constructor(firstName: string, lastName: string, frequentFlyerNo: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.frequentFlyerNo = frequentFlyerNo;
  }

  display() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.frequentFlyerNo);
  }
}
var passenger = new Passenger("Jone", "Smith", 2);
for (let item in passenger) {
  if(passenger[item] instanceof Function) { continue }

  console.log(passenger[item]);
}
// passenger.display();
