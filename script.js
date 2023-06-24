
let numTemp = [];
let num1 = '';
let operator = '';
let num2 = '';

function addition(num1, num2) {
  let sum = Number(num1) + Number(num2);
  return sum;
}

function subtract(num1, num2) {
  let sub = num1 - num2;
  return sub;
}

function multiply(num1, num2) {
  let mul = num1 * num2;
  return mul;
}

function divide(num1, num2) {
  let div = num1 / num2;
  return div;
}

function operate(num1, operator, num2) {
    if (operator === '+') {
      return addition(num1, num2);
    } else if (operator === '-') {
      return subtract(num1, num2);
    } else if (operator === 'x') {
      return multiply(num1, num2);
    } else if (operator === '/') {
      return divide(num1, num2);
    }
  }


textArea = document.getElementById("text-box");

function updateDisplay(value) {
    textArea.value += value;
  }

  function clearCalculator() {
    textArea.value = '';
    numTemp = [];
    num1 = '';
    operator = '';
    num2 = '';
  }
  
  function performCalculation() {
    num2 = textArea.value;
    const result = operate(num1, operator, num2);
    textArea.value = result;
    num1 = result;
    operator = '';
    num2 = '';
  }
  
  function handleNumberClick(number) {
    updateDisplay(number);
    numTemp.push(number);
    num1 = Math.max(...numTemp);
  }
  
  function handleOperatorClick(operatorSymbol) {
    updateDisplay(operatorSymbol);
    operator = operatorSymbol;
    num2 = Number(textArea.value);
    textArea.value = '';
  }

  const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const number = event.target.textContent;
    handleNumberClick(number);
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const operatorSymbol = event.target.textContent;
    handleOperatorClick(operatorSymbol);
  });
});

const btnClear = document.getElementById('clear').addEventListener('click', () => {
  clearCalculator();
});

const btnDelete = document.getElementById('delete').addEventListener('click', () => {
  textArea.value = textArea.value.slice(0, -1);
  numTemp.pop();
});

const btnEquals = document.getElementById('equals').addEventListener('click', () => {
  performCalculation();
});

// console.log(operate(num1, operator, num2));