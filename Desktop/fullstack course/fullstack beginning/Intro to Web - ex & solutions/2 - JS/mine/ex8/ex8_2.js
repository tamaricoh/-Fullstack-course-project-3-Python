let given = [
  [1, 6, 3, 9],
  [6, 12, 5, 21],
  [4, 11, 23, 1],
];
let maxInArr = given.map(function (innerArr) {
  return Math.max(...innerArr);
});
console.log(maxInArr);
let midRange = maxInArr.filter((o) => (o > 10) & (o < 20));
console.log(midRange);
