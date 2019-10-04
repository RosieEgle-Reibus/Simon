// Global Variables

// Buttons
let clickButton = document.getElementById('click-button')
let swipeButton = document.getElementById('swipe-button')
let dragButton = document.getElementById('drag-button')
let spaceButton = document.getElementById('space-button')
let startButton = document.getElementById("start-button")
let randomButton
let count = document.getElementById('count')
let container = document.getElementById("button-container")
let status = document.getElementById("status")
let highScoreDiv = document.getElementById("high-score")
let highScore = 0

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
playAudio = (buttonSound) => {
        buttonSound.play()
        .catch(e => console.error(e))
   
}
changeColorOn = (buttonName) => {
    buttonName.classList.add("on")
}
changeColorOff = (buttonName) => {
    buttonName.classList.remove("on")
}
lightAndSound = (buttonObj) => {
    changeColorOn(buttonObj.name)
    setTimeout(changeColorOff, 500, buttonObj.name)
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
highCalc = () => {
    if(userArray.length > highScore) {
        highScore = userArray.length
        highScoreDiv.innerText = highScore
    }
}
compare = () => {
    if (!userArray.length) {
        console.log("no entry")
        startArray = []
        status.innerText = "You lose :("
        return
    }
    for (let i = 0; i < userArray.length; i++)
        if ((userArray[i].name !== startArray[i].name) || (userArray.length < startArray.length) || (userArray.length > startArray.length)) {
            startArray = []
            userArray = []
            status.innerText = "You lose :("
            console.log("Lost")
            return
        }
    count.innerText = userArray.length
    setTimeout(newMove, 2000)
    return
}
newMove = () => {
    userArray = []
    status.innerText = "I believe in you!"
    randomizer()
    moveAdd()
    setTimeout(compare, (2000 * startArray.length))
}

// Event Listeners

//Start Button
startButton.addEventListener("click", function (event) {
    event.preventDefault()
    changeColorOn(startButton)
    setTimeout(changeColorOff, 200, startButton)
    setTimeout(newMove, 750)
})


//Buttons
clickButton.addEventListener("click", function (event) {
    event.preventDefault()
    lightAndSound(clickButtonObj)
    userArray.push(clickButtonObj)
})
// dragButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     lightAndSound(dragButtonObj)
//     userArray.push(dragButtonObj)
// })
swipeButton.addEventListener("mouseover", function (event) {
    event.preventDefault()
    lightAndSound(swipeButtonObj)
    userArray.push(swipeButtonObj)
})
container.addEventListener("keydown", function (event) {
    event.preventDefault()
    if(event.keyCode === 32) {
        console.log("BANANASSSSS")
    lightAndSound(spaceButtonObj)
    userArray.push(spaceButtonObj)
    }
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

// compare = () => {
//     if(!userArray.length) {
//         console.log("no entry")
//     }
// for(let i = 0; i < userArray.length; i++) {
//     if(userArray[i].name !== startArray[i].name) {
//         /// not equal
//         console.log("Lost")
//         startArray = []
//         userArray = []
//     }

//     else if(userArray[userArray.length - 1].name === startArray[startArray.length - 1].name) {
//         console.log("Equal")
//         setTimeout(newMove, 2000)
//     }
//     console.log(userArray)
//     console.log(startArray)
// }
// }

let dragContain = document.getElementById("drag-button")

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

dragContain.addEventListener("mousedown", dragStart, false);
dragContain.addEventListener("mouseup", dragEnd, false);
dragContain.addEventListener("mousemove", drag, false);

function dragStart(event) {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;
    if (event.target === dragButton) {
        active = true;
    }
    lightAndSound(dragButtonObj)
    userArray.push(dragButtonObj)
}
function drag(event) {
    if (active) {
        event.preventDefault();
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, dragButton);
    }
}
function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    active = false;
  }
