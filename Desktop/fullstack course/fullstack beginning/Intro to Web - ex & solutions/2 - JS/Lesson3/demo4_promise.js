

let prom = new Promise((resolve,reject) =>
    {
        setTimeout( () =>
        {
            ///Do some logic...
            //reject("Some error")
            resolve("ok")
        } ,1000)
    })

prom.then(data => console.log(data)).catch(err => console.log(err))

//Some running code...

console.log("End")