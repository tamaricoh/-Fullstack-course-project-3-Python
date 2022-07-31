//          0     1     2     3     4
let arr = ["a", "b", "c", "d", "k"];

arr[4] = "e"; //מחליף את הערך בתא 4
// ["a" , "b" , "c" , "d" , "e"]

arr.push("f"); // מוסיף תא בסוף המערך
// ["a" , "b" , "c" , "d" , "e" , "f"]

arr.unshift("z"); // מוסיף תא בתחילת המערך
// ["z" , "a" , "b" , "c" , "d" , "e" , "f"]

let last = arr.pop(); // מוחק את התא האחרון ומחזיר את הערך
// ["z" , "a" , "b" , "c" , "d" , "e"]
// last = "f"

let first = arr.shift(); // מוחק את התא הראשון ומחזיר את הערך
// ["a" , "b" , "c" , "d" , "e"]
// first = "z"

arr.splice(3, 2); // מוחק מהתא השלישי (כולל) כשני תאים
// ["a" , "b" , "c"]

let indexOfA = arr.indexOf("a");
let indexOfD = arr.indexOf("d");
// מחזיר את המיקום של האיבר, אם האיבר לא קיים יחזיר -1
// indexOfA = 0
// indexOfD = -1

let partial1 = arr.slice(2); // חותך את המערך מהתא השני (כולל) עד הסוף
// partial1 = ["c"]

let partial2 = arr.slice(1, 2); // חותך את המערך מהתא הראשן (כולל) עד התא השני (לא כולל)
// partial2 = ["b"]

console.log(partial2);
