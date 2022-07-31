let given = [
  [1, 6, 3, 9],
  [6, 12, 5, 21],
  [4, 11, 23, 1],
];

funcB(given);

function funcA(arr) {
  let prom = new Promise((resolve) => {
    setTimeout(() => resolve(totalSum(arr)), 2000);
  });
  return prom;
}

function totalSum(arr) {
  let total = 0;
  arr.forEach(function (innerArr) {
    innerArr.forEach(function (innerCell) {
      total += innerCell;
    });
  });
  return total;
}

async function funcB(arr) {
  // option 1 - get data from async function funcA
  let output = await funcA(arr);
  console.log(output * 2);
  // option 2 -
  funcA(arr).then((x) => console.log(2 * x));
}
