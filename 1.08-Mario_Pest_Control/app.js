const result = document.getElementById("result")
result.addEventListener("click",function(e){
    e.preventDefault()
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")
    let input3 = document.getElementById("input3")
    let totalCalulated = (input1.value)*5 + (input2.value)*7 + (input3.value)*11
    console.log(totalCalulated)
    let totalBox = document.getElementById("totalBox")
    let h1 = document.createElement("h1")
    h1.textContent = totalCalulated
    totalBox.append(h1)
})