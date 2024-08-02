function factorial() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var factorial = 1;
    for (var i = 1; i < num.length; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(1, 2, 4, 5, 6, 7));
