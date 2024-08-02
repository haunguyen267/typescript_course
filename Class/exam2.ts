class TouchScreenLaptop {
  ram: number;
  hd: string;
  processor: string;

  constructor(ram: number, hd: string, processor: string) {
    this.ram = ram;
    this.hd = hd;
    this.processor = processor;
  }

  scroll(): void {
    console.log("Scroll");
  };

  click(): void {
    console.log("Click");
  };
}

class HPLaptop extends TouchScreenLaptop {
  selfRecovery: boolean;

  constructor(ram: number, hd: string, processor: string, selfRecovery:boolean) {
    super(ram, hd, processor);
    this.selfRecovery = selfRecovery;
  }

  scroll(): void {
    console.log("HPLaptop scroll");
  }
}

class DellLaptop extends TouchScreenLaptop {
  mobileAccess: boolean;

  constructor(ram: number, hd: string, processor: string, mobileAccess:boolean) {
    super(ram, hd, processor);
    this.mobileAccess = mobileAccess;
  }

  scroll(): void {
    console.log("DellLaptop scroll");
  }
}

var hp = new HPLaptop(16, "2k", "Core i7", true);
for (let item in hp) {
  if(hp[item] instanceof Function) { continue }

  console.log(hp[item]);
}
var dell = new DellLaptop(32, "4k", "Core i9", false);
for (let item in dell) {
  if(dell[item] instanceof Function) { continue }

  console.log(dell[item]);
}
