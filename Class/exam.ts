class Organizer {
  private _id: number;
  private _name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get id():number {
    return this.id;
  }

  set id(id:number) {
    this.id = id;
  }

  get name():string {
    return this.name;
  }

  set name(name:string) {
    this.name = name;
  }

  display(): void {
    console.log(this.id + ": " + this.name);
  }
}

class Event1 {
  private _id: number;
  private _name: string;
  private _description: string;
  private _starttime: string;
  private _endtime: string;

  constructor(id: number, name: string, description: string, starttime: string, endtime: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.starttime = starttime;
    this.endtime = endtime;
  }

  get id():number {
    return this.id;
  }

  set id(id:number) {
    this.id = id;
  }

  get name():string {
    return this.name;
  }

  set name(name:string) {
    this.name = name;
  }

  get description():string {
    return this.description;
  }

  set description(description:string) {
    this.description = description;
  }

  get starttime():string {
    return this.starttime;
  }

  set starttime(starttime:string) {
    this.starttime = starttime;
  }

  get endtime():string {
    return this.endtime;
  }

  set endtime(endtime:string) {
    this.endtime = endtime;
  }

  display(): void {
    console.log(this.id + ": " + this.name);
    console.log(this.description);
    console.log(this.starttime + " - " + this.endtime);
  }
}

class Venue {
  private _id: number;
  private _name: string;
  private _description: string;
  private _address: string;

  constructor(id: number, name: string, description: string, address: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
  }

  get id():number {
    return this.id;
  }

  set id(id:number) {
    this.id = id;
  }

  get name():string {
    return this.name;
  }

  set name(name:string) {
    this.name = name;
  }

  get description():string {
    return this.description;
  }

  set description(description:string) {
    this.description = description;
  }

  get address():string {
    return this.address;
  }

  set address(address:string) {
    this.address = address;
  }

  display(): void {
    console.log(this.id + ": " + this.name);
    console.log(this.description);
    console.log(this.address);
  }
}

var organizer = new Organizer(1, "New or");
var event1 = new Event1(1, "New Event", "Desc", "08/24", "10/24");
var venue = new Venue(1, "New venue", "Desc", "HN");
organizer.display();
event1.display();
venue.display();
