function randomGenerator() {
  var randomNumber = Math.random();

  if(randomNumber > 0.5) {
    throw new TypeError("Random type error");
  } else {
    throw new RangeError("Random range error");
  }
}

try {
  randomGenerator()
} catch (error) {
  if(error instanceof TypeError) {
    console.log("TypeError ", error.message);
  } else if (error instanceof RangeError) {
    console.log("RangeError ", error.message);
  }
}
