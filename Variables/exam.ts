var n1:number = 20;
var n2:number = 3.14;

var s:string = "Success is the best revenge";

enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

console.log(n1);
console.log(n2);
for (let index = 0; index < 7; index++) {
  console.log(WeekDays[index]);
}
