function getAvg(arr) {
  let x = sum(arr);
  let avg = x / arr.length;
  console.log(avg);
}
function sum(arr) {
  let y = 0;
  arr.forEach(function (z) {
    y += z;
  });
  return y;
}

setTimeout(() => getAvg([1, 2, 3, 4, 5, 6]), 1000);
