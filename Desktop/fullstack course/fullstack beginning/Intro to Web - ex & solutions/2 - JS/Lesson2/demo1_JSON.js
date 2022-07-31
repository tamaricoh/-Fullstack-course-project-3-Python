let obj = { name : "Avi",
             age : 20,
             grades : [56,89,99],
             address : 
                {
                    city : 'Tel Aviv',
                    street : 
                        {
                            name : 'herzel',
                            no : 23
                        }
                }
            }

console.log( obj.name )

console.log( obj.address.street.name )

console.log( obj.grades[1] )


arr = [ {name : "Avi" , age : 20}, {name : "Dana" , age : 30}]

console.log( arr[1].age );