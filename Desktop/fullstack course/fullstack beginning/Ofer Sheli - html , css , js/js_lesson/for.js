let arr = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr.length; i++) {}
// לולאת פור רגילה

for (let i in arr) {
}
// צורה נוספת ללולאת פור רגילה , רץ על אינדקסים
// 0 <= i < arr.length

for (let item of arr) {
}
// לולאת פור שרצה על הערכים בתוך התאים ולא על האינדקסים
// item = arr[i]

arr.forEach(function (item) {
  // what to do with item ?
});
// לולאת פור שרצה על הערכים בתוך המערך
// וקוראת לפונ' אנונימית שתבצע פעולה
// item = arr[i]
// הפונ' יכולה לקבל גם את האינדקס
// function (item , i){}
