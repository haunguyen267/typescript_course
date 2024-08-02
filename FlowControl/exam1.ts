var numberInString = prompt("Enter a number: ");

if (numberInString?.trim()) {
  var n:number = parseInt(numberInString);
  if (!isNaN(n)) {
    if (n%2 === 0) {
      alert("number is even")
    } else {
      alert("number is odd")
    }
  }
}
