const add = document.getElementById("addBox")
const addition = document["addition"]
add.style.height = "33vh"
add.style.backgroundColor = "blue"
addition.addEventListener("submit",function(e){
    e.preventDefault()
    let result = addition.number1.value*1 + addition.number2.value*1
    let h1 = document.createElement("h1")
    h1.textContent = result
    add.append(h1)
    addition.number1.value = ""
    addition.number2.value = ""
})



const subtract = document.getElementById("subtractBox")
const subtraction = document["subtraction"]
subtract.style.height = "34vh"
subtract.style.backgroundColor = "violet"
subtraction.addEventListener("submit",function(e){
    e.preventDefault()
    let result = subtraction.number1.value - subtraction.number2.value
    let h1 = document.createElement("h1")
    h1.textContent = result
    subtract.append(h1)
    subtraction.number1.value = ""
    subtraction.number2.value = ""
})

const multiply = document.getElementById("multiplyBox")
const multiplication = document["multiplication"]
multiply.style.height = "33vh"
multiply.style.backgroundColor = "pink"
multiplication.addEventListener("submit",function(e){
    e.preventDefault()
    let result = multiplication.number1.value * multiplication.number2.value
    let h1 = document.createElement("h1")
    h1.textContent = result
    multiply.append(h1)
    multiplication.number1.value = ""
    multiplication.number2.value = ""
})