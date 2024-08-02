var studentScores = new Map([["nam", 90], ["kien", 50], ["ninh", 80]]);
console.log(studentScores.get("nam"));
studentScores.set("Minh", 100);
console.log(studentScores.size);
studentScores.delete("Minh");
console.log(studentScores.has("Minh"));
// studentScores.clear()
console.log(studentScores.keys());
for (var _i = 0, _a = Array.from(studentScores.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
