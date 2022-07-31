let arr = ["Yaron", "Dov", "Gilat", "Dana"];
let arrLonger = arr.filter((o) => o.length > 4);
let arrLength = arrLonger.map((o) => o.length);
let sum = arrLength.reduce(function (total, element) {
  return (total += element);
});
console.log(sum);
