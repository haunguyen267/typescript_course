function factorial(x:number, y:number, ...num:number[]) {
  let factorial = 1;
  for (let i = 1; i < num.length; i++) {
    factorial *= i
  }
  return factorial;
}

console.log(factorial(1,2,4,5,6,7));
