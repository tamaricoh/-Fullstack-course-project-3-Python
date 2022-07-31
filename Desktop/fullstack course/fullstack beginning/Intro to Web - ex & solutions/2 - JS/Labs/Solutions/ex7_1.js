let arr = ["Yaron","Dov","Gilat","Dana"]
console.log(arr)

let arr2 = arr.map(x => x.length)
console.log(arr2)

let arr3 = arr2.filter(x => x>4)
console.log(arr3)

let result = arr3.reduce((x,y) => x+y)
console.log(result)
