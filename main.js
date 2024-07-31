import { add, subtract, divide, multiply, power } from './calculation.js'

const numberContainerDiv = document.querySelector('.number-container')

const createNumberButton = () => {
    for(let i = 0; i < 10; i++) {
        let numberDiv = document.createElement('button');
        numberDiv.setAttribute('class', `number n-${i}`);
        numberDiv.textContent = i;
        if(i !== 0) numberDiv.style.order = 2 ;
        numberContainerDiv.appendChild(numberDiv);
    }

    
}

createNumberButton()