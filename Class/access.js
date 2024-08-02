var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.name = "abc";
console.log(student.name);
