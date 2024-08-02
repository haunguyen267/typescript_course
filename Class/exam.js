var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + ": " + this.name);
    };
    return Organizer;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    Event1.prototype.display = function () {
        console.log(this.id + ": " + this.name);
        console.log(this.description);
        console.log(this.starttime + " - " + this.endtime);
    };
    return Event1;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + ": " + this.name);
        console.log(this.description);
        console.log(this.address);
    };
    return Venue;
}());
var organizer = new Organizer(1, "New or");
var event1 = new Event1(1, "New Event", "Desc", "08/24", "10/24");
var venue = new Venue(1, "New venue", "Desc", "HN");
organizer.display();
event1.display();
venue.display();
