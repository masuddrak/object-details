// 1.simple object
const student={name:'Johora Khatun',age:24}
// console.log(student)

// 2.constructor object
const person=new Object()
// console.log(person)

// 3. new creat a object
// const human=Object.create(null)
const human=Object.create(student)

console.log(human.age)
