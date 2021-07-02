const myForm = document["my-form"]
const submitBtn = myForm["submit-button"]
myForm.addEventListener("click",function(e){
    e.preventDefault()
    
    alert("yup")
})