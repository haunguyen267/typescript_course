var vaccines:Array<string> = ["J&J", "Pfizer", "Sputnik"]

vaccines.push("Covaxin")
for (let index = 0; index < vaccines.length; index++) {
  console.log(vaccines[index]);
}

const [v1,v2,v3,v4,v5] = vaccines
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
