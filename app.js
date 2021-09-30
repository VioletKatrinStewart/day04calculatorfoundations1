
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';

//console.log(add);

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

//console.log(addInput1, addInput2, addButton, addAnswer);

addButton.addEventListener('click', ()=>{
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    //console.log(result);
    addAnswer.textContent = result;
    //console.log('add button was clicked');
});

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

subtractButton.addEventListener('click', ()=>{
    const value1 = Number(subtractInput1.value);
    const value2 = Number(subtractInput2.value);
    const result = subtract(value1, value2);
    subtractAnswer.textContent = result;
});

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', ()=> {
    const value1 = Number(multiplyInput1.value);
    const value2 = Number(multiplyInput2.value);
    const result = multiply(value1, value2);
    multiplyAnswer.textContent = result;
});

