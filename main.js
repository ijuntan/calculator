import { add, subtract, divide, multiply, power } from './calculation.js'

const numberContainerDiv = document.querySelector('.number-container')

const screenDiv = document.querySelector(".screen .content")

const operandA = 0
const operator = ""
const operandB = 0

const createNumberButton = () => {
    for(let i = 0; i < 10; i++) {
        let numberDiv = document.createElement('button');
        numberDiv.setAttribute('class', `number n-${i}`);
        numberDiv.textContent = i;

        // Need for "." and "=" styling order
        if(i !== 0) numberDiv.style.order = 2 ;

        numberContainerDiv.appendChild(numberDiv);
    }
}

const initScreen = () => {
    screenDiv.textContent = "0"
}

// Click Number -> Clear screen and number if the previous input is not number or 0, otherwise append to the screen if not 0
// Click . -> WIP
// Click = -> WIP
// Click C -> Clear screen and previous input
// Click Actions -> save to operator
const initEventListener = () => {
    numberContainerDiv.addEventListener("click", (e) => {
        if(e.target.classList[0] === "number") {
            updateScreenUI(e.target.textContent)
        }
    })
}

// Update Screen UI for Number
const updateScreenUI = (char) => {
    // special logic for "0" char

    if(screenDiv.textContent[0] === "0") {
        if(char === "0") return;
        screenDiv.textContent = char;
        return;
    }

    screenDiv.textContent += char
}

createNumberButton()
initScreen()
initEventListener()