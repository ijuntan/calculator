import { add, subtract, divide, multiply, power, modulo } from './calculation.js'

const buttonContainerDiv = document.querySelector('.button-container')
const numberContainerDiv = document.querySelector('.number-container')
const actionContainerDiv = document.querySelector('.action-container')
const screenDiv = document.querySelector(".screen .content")

let operandA = "0"
let operator = ""
let operandB = "0"
let currentOperation = 0

const actions = [{
    symbol: "+",
    type: "add"
},{
    symbol: "-",
    type: "subtract"
},{
    symbol: "x",
    type: "multiply"
},{
    symbol: "÷",
    type: "divide"
},{
    symbol: "%",
    type: "modulo"
},{
    symbol: "^",
    type: "power"
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

const printLog = () => {
    console.log(operandA, operator, operandB)
}

const initScreen = () => {
    screenDiv.textContent = operandA
}

// Click Number -> Clear screen and number if the previous input is not number or 0, otherwise append to the screen if not 0
// Click . -> Give dedcimal value to operand
// Click = -> Do operation and reset operand and operator
// Click C -> Clear screen and previous input
// Click Actions -> Save to operator
const initEventListener = () => {
    buttonContainerDiv.addEventListener("click", (e) => {
        if(e.target.classList[0] === "number") {
            let operandType = "A"
            if(currentOperation > 0) operandType = "B"

            updateOperand(operandType, e.target.textContent)
            updateScreenUI(operandType)
        }
        else if(e.target.classList[0] === "action") {
            if(currentOperation === 0) {
                operator = e.target.classList[1]
                currentOperation = 1;
            }
            else {
                operandA = doOperation();
                resetOperand(e.target.classList[1], 1);
            }
        }
        else if(e.target.classList[0] === "misc"){
            switch(e.target.classList[1]) {
                case "equal":
                    operandA = doOperation();
                    resetOperand();
                    break;
                case "backspace":
                    removeOperandChar()
                    break;
                case "clear":
                    clearScreen()
                    break;
            }
        }

        printLog()
    })
}

const resetOperand = (chainOperator = "", chainCurrentOperation = 0) => {
    initScreen()
    operator = chainOperator;
    operandB = "0";
    currentOperation = chainCurrentOperation;
}

const clearScreen = () => {
    operandA = "0"
    resetOperand()
}

// Update Screen UI for Number
const updateScreenUI = (type) => {
    screenDiv.textContent = type === "A" ? operandA : operandB
}

const updateOperand = (operandType, char) => {
    // special logic for "0" char
    if(operandType === "A") {
        if(operandA === "0") {
            if(char === "0") return;
            operandA = char;
            return;
        }
        operandA += char;
    }
        
    else if(operandType === "B") {
        currentOperation = 2;
        if(operandB === "0") {
            if(char === "0") return;
            operandB = char;
            return;
        }
        operandB += char;
    }
        
}

const removeOperandChar = () => {
    if(currentOperation === 2) {
        if(operandB === "0") return;
        operandB = operandB.slice(0, -1);
        if(operandB === "") operandB = "0"
        updateScreenUI("B");
    }
    else {
        if(operandA === "0") return;
        operandA = operandA.slice(0, -1);
        if(operandA === "") operandA = "0"
        updateScreenUI("A");
    } 
}

const doOperation = () => {
    let res = 0
    const a = Number(operandA)
    const b = Number(operandB)

    switch(operator) {
        case "add":
            res = add(a, b)
            break;
        case "subtract":
            res = subtract(a, b)
            break;
        case "multiply":
            res = multiply(a, b)
            break;
        case "divide":
            res = divide(a, b)
            break;
        case "modulo":
            res = modulo(a, b)
            break;
        case "power":
            res = power(a, b)
            break;
    }
    console.log('res: ', res)
    return (Math.round(res * 1000) / 1000) + ""
}

createButton()
initScreen()
initEventListener()