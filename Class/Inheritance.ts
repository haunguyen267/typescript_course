class BMW {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Start");
  }

  stop(): void {
    console.log("Stop");
  }
}

class ThreeSeries extends BMW {
  cruiseControlEnabled: boolean;

  constructor(make: string, model: string, year: string, cruiseControlEnabled: boolean) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }

  start(): void {
    console.log("Button Start");
  }

  stop(): void {
    console.log("Button Stop");
  }
}

class FiveSeries extends BMW {
  parkingAssistEnabled: boolean;

  constructor(make: string, model: string, year: string, parkingAssistEnabled: boolean) {
    super(make, model, year);
    this.parkingAssistEnabled = parkingAssistEnabled;
  }

  start(): void {
    console.log("Remote Start");
  }

  stop(): void {
    console.log("Remote Stop");
  }
}

var threeSeries = new ThreeSeries("BMW", "300i", "2024", true);
threeSeries.start();
threeSeries.stop();
var fiveSeries = new FiveSeries("BMW", "500i", "2084", true);
fiveSeries.start();
fiveSeries.stop();
