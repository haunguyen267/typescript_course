let studentScores = new Map([["nam", 90], ["kien", 50], ["ninh", 80]])
console.log(studentScores.get("nam"));
studentScores.set("Minh", 100);
console.log(studentScores.size);
studentScores.delete("Minh");
console.log(studentScores.has("Minh"));
// studentScores.clear()
console.log(studentScores.keys())
for (let key of Array.from(studentScores.keys())) {
  console.log(key);
  console.log(studentScores.get(key));
}

console.log(studentScores.values());
console.log(studentScores.entries());
