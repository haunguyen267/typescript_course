class Caculator {
  static sum(num1: number, num2: number):number {
    return num1 + num2;
  }

  static sub(num1: number, num2: number):number {
    return num1 - num2;
  }
}

console.log(Caculator.sum(100, 23));
console.log(Caculator.sub(50, 25));
