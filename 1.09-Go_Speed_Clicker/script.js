const myBtn = document.getElementById("my-button")
const offset = 100
let trickery = true

myBtn.addEventListener("click", () => {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1
    }
    myBtn.textContent = sessionStorage.clickcount
})

document.addEventListener("mousemove", (e) => {
    if(trickery === true){
        const x = e.pageX
        const y = e.pageY
        const buttonBox = myBtn.getBoundingClientRect()
        const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
        const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
        const horizontalOffset = buttonBox.width / 2 + offset
        const verticalOffset = buttonBox.height / 2 + offset
        if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
            setButtonPosition(
                buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
                buttonBox.y + verticalOffset / verticalDistanceFrom * 10
            )
        }
    }
})

function setButtonPosition(left, top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = myBtn.getBoundingClientRect()
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - offset
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + offset
    }
    if(distanceFromCenter(top, windowBox.left, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - offset
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + offset
    }
    myBtn.style.left = `${left}px`
    myBtn.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}

window.addEventListener("keypress", function(KeyboardEvent) {
    if(KeyboardEvent.key == "j") {
        return trickery = false
    }
})