const array1 = [1, 2, 3, 4, 5]
const result1 = array1.map(num => num*2)
console.log(result1)

const array2 = [1, 2, 3, 4, 5]
const result2 = array2.map(num => num.toString())
console.log(result2)

const array3 = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const result3 = array3.map(word => {
    const newArray = word.toLowerCase()
    return newArray.charAt(0).toUpperCase() + newArray.slice(1)
})
console.log(result3)

const array4 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const result4 = array4.map(people => people.name)
console.log(result4)

const result5 = array4.map(function(people){
    if(people.age > 18){
        return people.name + " can go to the Matrix"
    } else {
        return people.name + " is under age!!"
    }
})
console.log(result5)

const result6 = array4.map(function(people){
    return "<h1>" + people.name + "</h1><h2>" + people.age + "</h2>"
})
console.log(result6)