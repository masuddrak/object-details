// 1.simple object
const student={name:'Johora Khatun',age:24}
// console.log(student)

// 2.constructor object
const person=new Object()
// console.log(person)

// 3. new creat a object
// const human=Object.create(null)
const human=Object.create(student)

// 4.usin class object
class Pepole{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
// functional object
const pep=new Pepole('sakib',88)
function mans(name){
    this.name=name
}
const man=new mans('jhogkar')
console.log(man)
