let given = [
  { name: "Avi", age: 20 },
  { name: "Ron", age: 30 },
  { name: "Dana", age: 25 },
];
let ageRange = given.filter((o) => (o.age > 21) & (o.age < 33));
console.log(ageRange.map((o) => o.name));
console.log(ageRange.map((o) => o.name.length));
