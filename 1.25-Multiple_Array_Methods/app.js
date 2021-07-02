const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function result(arr){
    const stepOne = arr.filter(people => people.age >= 18)
    const stepTwo = stepOne.sort((a, b) => {
        if(a.lastName < b.lastName) return -1;
        return 1
    })
    const stepThree = stepTwo.reduce(function(final, current){
        final.push("<li>" + current.firstName + " " + current.lastName + " is " + current.age + "</li>")
        return final
    }, [])
    return stepThree
}
console.log(result(peopleArray))