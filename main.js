import { add, subtract, divide, multiply, power } from './calculation.js'

const numberContainerDiv = document.querySelector('.number-container')
const actionContainerDiv = document.querySelector('.action-container')
const screenDiv = document.querySelector(".screen .content")

let operandA = 0
let operator = ""
let operandB = 0

const actions = [{
    symbol: "+",
    type: "add"
},{
    symbol: "-",
    type: "subtract"
},{
    symbol: "x",
    type: "multiplys"
},{
    symbol: "÷",
    type: "divide"
},{
    symbol: "%",
    type: "modulo"
},{
    symbol: "^",
    type: "power"
},{
    symbol: "C",
    type: "clear"
},{
    symbol: "←",
    type: "backspace"
}]

const createButton = () => {
    for(let i = 0; i < 10; i++) {
        let numberDiv = document.createElement('button');
        numberDiv.setAttribute('class', `number n-${i}`);
        numberDiv.textContent = i;

        // Need for "." and "=" styling order
        if(i !== 0) numberDiv.style.order = 2 ;

        numberContainerDiv.appendChild(numberDiv);
    }

    actions.forEach(action => {
        let actionDiv = document.createElement('button');
        actionDiv.setAttribute('class', `action ${action.type}`);
        actionDiv.textContent = action.symbol;
        actionContainerDiv.appendChild(actionDiv);
    })
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
            if(operator !== "")
                updateOperand("A")
            else
                updateOperand("B")
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

    // update as usual
    screenDiv.textContent += char
}

const updateOperand = (operandType) => {
    if(operandType === "A")
        operandA = Number(screenDiv.textContent)
    else if(operandType === "B")
        operandB = Number(screenDiv.textContent)
}

createButton()
initScreen()
initEventListener()