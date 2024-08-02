const numberToCheck:number = 7
const isPrimeNumber = (n:number) => {
  for (let i = 2; i < n; i++) {
    if(n % i === 0) return false;
  }

  return true;
}

if (isPrimeNumber(numberToCheck)) {
  console.log("Number is a prime number");
} else {
  console.log("Number is not a prime number");
}
