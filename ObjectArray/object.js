var student = {
    firtName: "Nguyen",
    lastName: "Hau",
    score: 100,
};
console.log(student.firtName);
console.log(student.score);
for (var item in student) {
    // console.log(item);
    console.log(student[item]);
}
var firtName = student.firtName, lastName = student.lastName, score = student.score;
console.log(firtName);
console.log(lastName);
console.log(score);
