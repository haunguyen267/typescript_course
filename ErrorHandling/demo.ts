function divide(a:number, b:number):number {
  if(b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a/b;
}

console.log(divide(8,2))
try {
  console.log(divide(8,0))
} catch (error) {
  console.log(error);
} finally {
  console.log("Always run")
}
