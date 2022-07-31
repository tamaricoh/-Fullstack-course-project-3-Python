function getAvg(arr)
{
    return new Promise(resolve =>
        {
            setTimeout( () =>
            {
                let total = 0
                arr.forEach(x => {
                    total += x;
                });

                let avg = total / arr.length;
                resolve(avg)

            },1000)
        })
}

getAvg([6,3,7,5]).then(data => console.log(data))