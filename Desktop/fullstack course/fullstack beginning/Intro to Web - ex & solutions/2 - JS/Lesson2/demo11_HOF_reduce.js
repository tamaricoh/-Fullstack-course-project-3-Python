let arr = [5,3,7,9]

let result = arr.reduce((x,y) => x+y)
console.log(result)

let minNum = arr.reduce((x,y) => x<y? x : y)
console.log(minNum)