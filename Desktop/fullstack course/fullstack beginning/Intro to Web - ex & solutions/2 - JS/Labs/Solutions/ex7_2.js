let arr = [{name : "Avi", age : 20},
            {name : "Ron", age : 30},
            {name : "Dana", age : 25}]

let arr2 = arr.filter(x => x.age >=22 && x.age <= 32)

arr2.forEach(x => console.log(x.name))

let arr3 = arr2.map(x => x.name.length)
