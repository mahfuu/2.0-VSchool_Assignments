const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result1 = array1.reduce(function(final, current){
    final += current
    return final
}, 0)
// console.log(result1)

const result2 = array1.reduce(function(final, current){
    final.push(current)
    return final
}, []).join("")
// console.log(result2)

const array3 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const result3 = array3.reduce(function(final, current){
    if(current.voted){
        final++
    }
    return final
}, 0)
// console.log(result3)

const array4 = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const result4 = array4.reduce(function(final, current){
    final.cost += current.price
    return final
}, {cost: 0})
// console.log(result4.cost)

const array5 = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const result5 = array5.reduce(function(final, current){
    return final.concat(current)
})
// console.log(result5)

const array6 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const result6 = array6.reduce(function(final, current){
    if(current.age <= 25 && current.age >= 18){
        final.agePool18To25++
    }
    if(current.age <= 25 && current.age >= 18 && current.voted){
        final.agePool18To25DidVote++
    }
    if(current.age <= 35 && current.age >= 26){
        final.agePool26To35++
    }
    if(current.age <= 35 && current.age >= 26 && current.voted){
        final.agePool26To35DidVote++
    }
    if(current.age <= 55 && current.age >= 36){
        final.agePool36To55++
    }    
    if(current.age <= 55 && current.age >= 36 && current.voted){
        final.agePool36To55DidVote++
    }
    return final
}, {agePool18To25DidVote: 0, agePool18To25: 0, agePool26To35DidVote: 0, agePool26To35: 0, agePool36To55DidVote: 0, agePool36To55: 0})
// console.log(result6)