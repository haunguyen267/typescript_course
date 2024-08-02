var employee = {
    id: 1,
    fullname: "John",
    salary: 2000
};
for (var key in employee) {
    console.log(key + " : " + employee[key]);
}
var id = employee.id, fullname = employee.fullname, salary = employee.salary;
console.log(id);
console.log(fullname);
console.log(salary);
