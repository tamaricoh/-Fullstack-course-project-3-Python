class Person
{
    constructor()
    {
        this.name = "";
        this.id = "";
    }

    printData()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

class Student extends Person
{
    constructor()
    {
        super()
        this.faculty = ""
    }

    printData()
    {
        console.log(this.id)
        console.log(this.name)
        console.log(this.faculty)
    }
}

let p = new Person();
p.id  = 1
p.name = "Ron"

p.printData()


let s = new Student();
s.id = 2
s.name = "Dana"
s.faculty = "Physics"

s.printData();
