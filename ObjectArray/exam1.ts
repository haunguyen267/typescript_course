var employee = {
  id: 1,
  fullname: "John",
  salary: 2000
}

for (const key in employee) {
  console.log(key + " : " + employee[key]);
}

const { id, fullname, salary } = employee;
console.log(id);
console.log(fullname);
console.log(salary);
