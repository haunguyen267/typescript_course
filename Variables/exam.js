var n1 = 20;
var n2 = 3.14;
var s = "Success is the best revenge";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log(n1);
console.log(n2);
console.log(WeekDays);
for (var index = 0; index < 7; index++) {
    console.log(WeekDays[index]);
}
