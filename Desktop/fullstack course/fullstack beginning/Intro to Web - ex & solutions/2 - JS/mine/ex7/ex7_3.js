let given = [
  [1, 6, 3, 9],
  [6, 12, 5, 21],
  [4, 11, 23, 1],
];
let total = 0;
given.forEach(function (innerArr) {
  innerArr.forEach(function (innerCell) {
    total += innerCell;
  });
});
console.log(total);
