var Caculator = /** @class */ (function () {
    function Caculator() {
    }
    Caculator.sum = function (num1, num2) {
        return num1 + num2;
    };
    Caculator.sub = function (num1, num2) {
        return num1 - num2;
    };
    return Caculator;
}());
console.log(Caculator.sum(100, 23));
console.log(Caculator.sub(50, 25));
