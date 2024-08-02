var cars:Array<string> = ["Mercedes", "BMW", "Toyota"]
cars.push("KIA")
cars.push("Vinfast")

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

const [a,b,c] = cars;
console.log(a);
console.log(b);
console.log(c);
