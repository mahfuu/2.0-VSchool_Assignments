// Step One

// function collectAnimals(/*your code here*/) {  
    /*and here*/ 
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const collectAnimals = (...animals) => {
    let animalArray = []
    animalArray.push(...animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

// Step Two

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// => 
// {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
// }

const combineFruit = (fruit, sweets, vegetables) => {fruit, sweets, vegetables}

combineFruit(
    ["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]
)

// Step Three

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
// }
  
// function parseSentence(_________){
//     return `We're going to have a good time in ${location} for ${duration}`
// }

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
}

const {location, duration} = vacation
  
const parseSentence = () => `We're going to have a good time in ${location} for ${duration}`

// Step Four

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

const returnFirst = (...items) => items[0]

// Step Five

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]

const returnFavorites = arr => `My top three favorite activities are ${arr[0]}, ${arr[1]}, and ${arr[2]}.`

returnFavorites(favoriteActivities)

// Step Six

// function combineAnimals() {  
 
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineAnimals = (...arr) => arr.flat(arr.length)

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)

// Step Seven

// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
//     return numbers.reduce(function(acc, number) {
//         return acc * number;
//     }, 1)
// }

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)

// Step Eight

// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
// }

const unshift = (array, ...rest) => [...rest, ...array]

// Step Nine

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

const populatePeople = names => names.map(name => name = name.split(" "), firstName = name[0], lastName = name[1])

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))