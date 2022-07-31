//Rule 1 : Async function is any function with an async operation within

const { ConnectionStates } = require("mongoose")

//Rule 2 : An async can return ONLY promise
function someFunc(num)
{
  return new Promise(resolve =>
    {
        setTimeout( () => resolve(num*2) ,2000)
    })
}

someFunc(10).then(data => console.log(data))
console.log("end")




//Some running code...

console.log("End")