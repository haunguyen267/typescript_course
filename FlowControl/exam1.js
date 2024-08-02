var numberInString = prompt("Enter a number: ");
if (numberInString === null || numberInString === void 0 ? void 0 : numberInString.trim()) {
    var n = parseInt(numberInString);
    if (!isNaN(n)) {
        if (n % 2 === 0) {
            alert("number is even");
        }
        else {
            alert("number is odd");
        }
    }
}
