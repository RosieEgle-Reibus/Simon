// Global Variables

// Buttons
let clickButton = document.getElementById('click-button')
let swipeButton = document.getElementById('swipe-button')
let dragButton = document.getElementById('drag-button')
let spaceButton = document.getElementById('space-button')
let startButton = document.getElementById("start-button")
let randomButton

//Sound Variables
let clickSound = document.getElementById("clickSound")
let dragSound = document.getElementById("dragSound")
let swipeSound = document.getElementById("swipeSound")
let spaceSound = document.getElementById("spaceSound")

//Arrays
let buttons = [clickButton, swipeButton, dragButton, spaceButton]
let userArray = []
let startArray = [] 


randomizer = () => {
randomButton = buttons[Math.floor(Math.random()*buttons.length)]
startArray.push(randomButton)
}

// Global Functions
playAudio = (button) => {
    button.play() 
}
changeColorOn = (buttonName) => {
    buttonName.classList.add("on")
}
changeColorOff = (buttonName) => {
    buttonName.classList.remove("on")
}
lightAndSound = (buttonName, sound) => {
    changeColorOn(buttonName) 
    setTimeout(changeColorOff, 1000, buttonName) 
    playAudio(sound)
}

// Event Listeners

//Start Button
startButton.addEventListener("click", function(event){
    event.preventDefault()
    changeColorOn(startButton) 
    setTimeout(changeColorOff, 1000, startButton)   
})

//Buttons
clickButton.addEventListener("click", function(event){
    event.preventDefault()
    lightAndSound(clickButton, clickSound)
})
dragButton.addEventListener("click", function(event){
    event.preventDefault()
    lightAndSound(dragButton, dragSound)
})
swipeButton.addEventListener("click", function(event){
    event.preventDefault()
    lightAndSound(swipeButton, swipeSound)
})
spaceButton.addEventListener("click", function(event){
    event.preventDefault()
    lightAndSound(spaceButton, spaceSound)
})


