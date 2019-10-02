// Global Variables

let clickButton = document.getElementById('click-button')
let swipeButton = document.getElementById('swipe-button')
let dragButton = document.getElementById('drag-button')
let spaceButton = document.getElementById('sapce-button')

// function sound(src) {
//     startButton.sound = document.createElement("audio");
//     startButton.sound.src = src;
//     startButton.sound.setAttribute("preload", "auto");
//     startButton.sound.setAttribute("controls", "none");
//     startButton.sound.style.display = "none";
//     startButton.appendChild(this.sound);
//     startButton.play = function(){
//         startButton.sound.play();
//     }

let startSound = document.getElementById("tryit")

let startButton = document.getElementById("start-button")

playAudio = () => {
    startSound.play() 
}

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
    playAudio()
})