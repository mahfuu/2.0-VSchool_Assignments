const array1 = [3, 6, 8, 2]
const result1 = array1.filter(num => num > 5)
// console.log(result1)

const result2 = array1.filter(num => num % 2 === 0)
// console.log(result2)

const array3 = ["dog", "wolf", "by", "family", "eaten", "camping"]
const result3 = array3.filter(word => word.length <= 5)
// console.log(result3)

const array4 = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const result4 = array4.filter(people => people.member)
// console.log(result4)

const array5 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const result5 = array5.filter(people => people.age >= 18)
// console.log(result5)