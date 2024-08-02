const hello = (name: string):string => "Hello " + name;
const multiply = (num1:number, num2:number):number => num1*num2;

var funcArray:Array<any> = [];
for (let i = 0; i < 5; i++) {
  funcArray.push(():number => i)
}

for (let j = 0; j < funcArray.length; j++) {
  console.log(funcArray[j]());
}

// console.log(hello("Nam"));
// console.log(multiply(3,4));
