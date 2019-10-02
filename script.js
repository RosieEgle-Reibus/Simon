// Global Variables

let clickButton = document.getElementById('click-button')
let swipeButton = document.getElementById('swipe-button')
let dragButton = document.getElementById('drag-button')
let spaceButton = document.getElementById('sapce-button')




let startButton = document.getElementById("start-button")

changeColorOn = (buttonName) => {
    buttonName.classList.add("on")
}
changeColorOff = (buttonName) => {
    buttonName.classList.remove("on")
}


startButton.addEventListener("click", function(event){
    event.preventDefault()
    changeColorOn(startButton) 
    setTimeout(changeColorOff, 1000, startButton)  
})




