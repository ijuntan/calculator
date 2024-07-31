import { add, subtract, divide, multiply, power } from './calculation.js'

const numberContainerDiv = document.querySelector('.number-container')

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

const initEventListener = () => {
    numberContainerDiv.addEventListener("click", (e) => {
        if(e.target.classList[0] === "number") {
            console.log(e.target.classList[1])
        }
    })
}


createNumberButton()
initEventListener()