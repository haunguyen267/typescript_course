var mathPoint:number = 100;
var physicsPoint:number = 90;
var chemistryPoint:number = 90;

function average(...points:number[]): number {
  let sumPoint = 0;

  for (let i = 0; i < points.length; i++) {
    sumPoint += points[i]
  }

  return sumPoint / points.length;
}

var averagePoint:number = average(mathPoint, physicsPoint, chemistryPoint);

if (averagePoint < 70) {
  console.log("C Grade");
}
if (averagePoint >= 70 && averagePoint <= 90) {
  console.log("B Grade");
}
if (averagePoint > 90) {
  console.log("A Grade");
}
