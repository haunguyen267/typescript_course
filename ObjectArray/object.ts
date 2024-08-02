var student = {
  firtName: "Nguyen",
  lastName: "Hau",
  score: 100,
};

console.log(student.firtName);
console.log(student.score);

for (const item in student) {
  // console.log(item);
  console.log(student[item]);
}

const { firtName,lastName,score } = student;
console.log(firtName);
console.log(lastName);
console.log(score);
