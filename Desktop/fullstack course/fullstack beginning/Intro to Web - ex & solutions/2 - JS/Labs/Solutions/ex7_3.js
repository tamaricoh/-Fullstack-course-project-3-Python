let arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]]

let total = 0

arr.forEach(x =>
    {
        x.forEach(y =>
            {
                total += y;
            })
    })