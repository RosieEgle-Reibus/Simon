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

// Objects
let clickButtonObj = {
    name: clickButton,
    sounds: clickSound
}
let dragButtonObj = {
    name: dragButton,
    sounds: dragSound
}
let swipeButtonObj = {
    name: swipeButton,
    sounds: swipeSound
}
let spaceButtonObj = {
    name: spaceButton,
    sounds: spaceSound
}


//Arrays
let buttons = [clickButtonObj, swipeButtonObj, dragButtonObj, spaceButtonObj]
let userArray = []
let startArray = []


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
lightAndSound = (buttonObj) => {
    changeColorOn(buttonObj.name)
    setTimeout(changeColorOff, 1000, buttonObj.name)
    playAudio(buttonObj.sounds)
}
randomizer = () => {
    randomButton = buttons[Math.floor(Math.random() * buttons.length)]
    startArray.push(randomButton)
}
moveAdd = () => {
    for (let i = 0; i < startArray.length; i++) {
        setTimeout(lightAndSound, 1000 * i, startArray[i])
    }
}
compare = () => {
    for(let i = 0; i < startArray.length; i++) {
        if(userArray[i].name === startArray[i].name) {
            /// equal so far
           console.log(userArray)
        }
        else if(userArray.length = 0 ) {
            console.log("no entry")
        }

        else {
            // not equal game over
            console.log("not equal")
            // alert("You lost!")
            return
        }
    }
}
  
newMove = () => {
    userArray = []
    randomizer()
    moveAdd()
    
}


// Event Listeners

//Start Button
startButton.addEventListener("click", function (event) {
    event.preventDefault()
    changeColorOn(startButton)
    setTimeout(changeColorOff, 500, startButton)
    newMove()
    setTimeout(compare, 4000)
})


//Buttons
clickButton.addEventListener("click", function (event) {
    event.preventDefault()
    lightAndSound(clickButtonObj)
    userArray.push(clickButtonObj)
})
dragButton.addEventListener("click", function (event) {
    event.preventDefault()
    lightAndSound(dragButtonObj)
    userArray.push(dragButtonObj)
})
swipeButton.addEventListener("click", function (event) {
    event.preventDefault()
    lightAndSound(swipeButtonObj)
    userArray.push(swipeButtonObj)
})
spaceButton.addEventListener("click", function (event) {
    event.preventDefault()
    lightAndSound(spaceButtonObj)
    userArray.push(spaceButtonObj)
})





// PSUEDOCODE

// click start

// start calls randomizer 

// forEachthen calls light/sound on startArray

// wait with settimeout to run if statement

// user clicks the same button

// if startArray === userarray 

// then we loop back to top and do it again 

// else user loses and startarray = []