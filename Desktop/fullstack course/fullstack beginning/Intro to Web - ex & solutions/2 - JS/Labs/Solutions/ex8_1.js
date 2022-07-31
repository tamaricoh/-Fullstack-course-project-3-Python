let arr = [{name : "Ron", age : 20},
            {name : "Dana", age : 30},
            {name : "Avi", age : 40}]



let arr2 = arr.filter(x => x.age >=22 && x.age <= 32)

arr2.forEach(x => console.log(x.name))

let arr3 = arr2.map(x => x.name.length)


