const array1 = [1, 3, 5, 2, 90, 20]
const result1 = array1.sort((a, b) => a - b)
// console.log(result1)

const result2 = array1.sort((a, b) => b - a)
// console.log(result2)

const array3 = ["dog", "wolf", "by", "family", "eaten"]
const result3 = array3.sort((a, b) => a.length - b.length)
// console.log(result3)

const result4 = array3.sort()
// console.log(result4)

const array5 = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
const result5 = array5.sort((a, b) => a.age - b.age)
// console.log(result5)