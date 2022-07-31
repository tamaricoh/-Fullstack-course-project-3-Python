let arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]]

let arr2 = arr.map(x =>
    {
        let max_num = 0
        x.forEach(num => {
            if(num > max_num)
            {
                max_num = num
            }
        });
        return max_num
    })

    console.log(arr2)

