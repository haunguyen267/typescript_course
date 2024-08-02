var mathPoint = 100;
var physicsPoint = 80;
var chemistryPoint = 90;
function average() {
    var points = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        points[_i] = arguments[_i];
    }
    var sumPoint = 0;
    for (var i = 0; i < points.length; i++) {
        sumPoint += points[i];
    }
    return sumPoint / points.length;
}
var averagePoint = average(mathPoint, physicsPoint, chemistryPoint);
if (averagePoint < 70) {
    console.log("C Grade");
}
if (averagePoint >= 70 && averagePoint <= 90) {
    console.log("B Grade");
}
if (averagePoint > 90) {
    console.log("A Grade");
}
