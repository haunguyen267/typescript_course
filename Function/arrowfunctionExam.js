var numberToCheck = 7;
var isPrimeNumber = function (n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
};
if (isPrimeNumber(numberToCheck)) {
    console.log("Number is a prime number");
}
else {
    console.log("Number is not a prime number");
}
