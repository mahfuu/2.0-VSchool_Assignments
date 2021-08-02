// https://api.vschool.io/matthew/todo for my project
// https://youtu.be/MBaw_6cPmAw credit for the modal style I used goes to YouTube channel Web Dev Simplified

const appMain = document.getElementById("app-main")
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")
const todoForm = document.todoform

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modals => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("submit clicked")
    const addTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.url.value
    }
    axios.post("https://api.vschool.io/matthew/todo", addTodo)
        .then(response => {
            console.log(response.data)
            clearList()
            loadTodoList()
        })
        .catch(error => console.log("ERROR: " + error))
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.url.value = ""
})


const loadTodoList = () => {
    axios.get("https://api.vschool.io/matthew/todo")
        .then(response => {
            console.log(response.data)
            for(let i = 0; i < response.data.length; i++){
                if(response.data[i].completed === true){continue}
                const div = document.createElement("div")
                const p = document.createElement("p")
                const trashBtn = document.createElement("button")
                const box = document.createElement("input")
                box.type = "checkbox"
                box.classList = "check-todo"
                div.classList.add("new-todo")
                p.textContent = response.data[i].title
                p.style.width = "300px"
                div.setAttribute("id", `${response.data[i]._id}`)
                trashBtn.classList.add("trash-button")
                div.appendChild(p)

                // eventlistener for trashbutton (axios.delete)

                trashBtn.addEventListener("click", (e) => {
                    console.log("clicking")
                    deleteTodo(response.data[i]._id)
                })

                div.appendChild(trashBtn)
                appMain.appendChild(div)
                box.addEventListener("change", (e) => {
                    console.log("checkTodo is listening")
                    if(box.checked){
                        console.log(box.parentElement.id)
                        const boxid = box.parentElement.id
                        console.log(boxid)
                        box.parentElement.classList.add("cross-out")
                        changeIsCompleted(boxid)
                    } else {
                        console.log(box.parentElement.id)
                        const boxid = box.parentElement.id
                        box.parentElement.classList.remove("cross-out")
                        changeNotCompleted(boxid)
                    }
                })
                div.prepend(box)
                if(response.data[i].completed) {
                    div.removeChild(trashBtn)
                    div.classList.add("cross-out")
                }
                const tooltipContainer = document.getElementById("tooltip-container")
                const newList = document.createElement("div")
                tooltipContainer.appendChild(newList).classList.add(`${response.data[i]._id}`)
                tooltipContainer.appendChild(newList).classList.add("tooltip-item")
                
                //build a tooltip to display
                // newList.style.display = "none"

                const newTitle = document.createElement("h1")
                const newPrice = document.createElement("h2")
                const isCompleted = document.createElement("h3")
                const todoDescription = document.createElement("p")
                const tooltipImage = document.createElement("img")
                const tooltipURL = document.createElement("a")
                newTitle.textContent = response.data[i].title
                newPrice.textContent = `$ ${response.data[i].price}`
                isCompleted.textContent = response.data[i].completed
                isCompleted.style.display = "none"
                todoDescription.textContent = response.data[i].description
                tooltipURL.textContent = response.data[i].imgUrl
                tooltipImage.src = response.data[i].imgUrl
                newList.appendChild(tooltipImage)
                newList.appendChild(tooltipURL)
                newList.appendChild(newTitle)
                newList.appendChild(newPrice)
                newList.appendChild(todoDescription)
                newList.appendChild(isCompleted)
            }
        })
        .catch(error => console.log("ERROR:" + error))
}

const changeIsCompleted = (boxid) => {
    const isCompleted = {
        completed: true
    }
    console.log(boxid)
    axios.put(`https://api.vschool.io/matthew/todo/${boxid}`, isCompleted)
        .then(response => console.log("put is working"))
        .catch(error => console.log("nope, ERROR:" + error))
}  

const changeNotCompleted = (boxid) => {
    const notCompleted = {
        completed: false
    }
    console.log(boxid)
    axios.put(`https://api.vschool.io/matthew/todo/${boxid}`, notCompleted)
        .then(response => console.log("put is working"))
        .catch(error => console.log("nope, ERROR:" + error))
}

const deleteTodo = (trashid) => {
    axios.delete(`https://api.vschool.io/matthew/todo/${trashid}`)
        .then(response => {
            console.log("delete is working")
            clearList()
            loadTodoList()
        })
        .catch(error => console.log("nope, ERROR:" + error))
}

const clearList = () => {
    const appMain = document.getElementById("app-main")
    while(appMain.firstChild){
        appMain.removeChild(appMain.firstChild)
    }
}

loadTodoList()