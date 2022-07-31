function sayHello(name)
{
    console.log("Hello " + name)
}

function add(num1,num2)
{
    if(num1+num2 > 10)
    {
        console.log(num1+num2)
    }
    else
    {
        return num1+num2;
    }
}


let result = add(5,7);
console.log(result);