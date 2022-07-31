
function funcA(num)
{
  return new Promise(resolve =>
    {
        setTimeout( () => resolve(num*2) ,2000)
    })
}

//Option 1
/*
function funcB()
{
    funcA(4).then(data => console.log(data))
}
*/

//Option 2 - async-await
async function funcB()
{
  let data = await funcA(4)
  console.log(data)
}


funcB()

console.log("End")