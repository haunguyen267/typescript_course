var hello = function (name) { return "Hello " + name; };
var multiply = function (num1, num2) { return num1 * num2; };
var funcArray = [];
var _loop_1 = function (i) {
    funcArray.push(function () { return i; });
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
for (var j = 0; j < funcArray.length; j++) {
    console.log(funcArray[j]());
}
// console.log(hello("Nam"));
// console.log(multiply(3,4));
