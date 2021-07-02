const name = "John"
let age = 101

function runForLoop(pets) {

    
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }


    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Task One

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => arr.map(carrot => type = `${carrot}`, name = carrot)


// Task Two

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = arr => arr.filter(person => person.friendly)

// Task Three

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

// Task Four

const printString = (firstName = "Jane", lastName = "Doe", age = "100") => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(printString())
console.log(printString("Kate", "Stark", 40))

// Task Five

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = arr => arr.filter(animal => animal.type === "dog")