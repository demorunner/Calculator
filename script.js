// let num1 = prompt("Enter First Number : ");
// let operator = prompt("Enter one Operator (+,-,x,/) : ");
// let num2 = prompt("Enter Second Number : ");

function addition(n1, n2) {
    let sum = Number(n1) + Number(n2)
    return sum;
}

function subtract(n1, n2) {
    let sub = n1 - n2
    return sub;
}

function multiply(n1, n2) {
    let mul = n1 * n2
    return mul;
}

function divide(n1, n2) {
    let div = n1 / n2
    return div;
}

function operate(n1, operator, n2) {
    if (operator === '+') {
        return addition(n1, n2)
    } else if (operator === '-') {
        return subtract(n1, n2)
    } else if (operator === 'x') {
        return multiply(n1, n2)
    } else if (operator === "/") {
        return divide(n1, n2)
    }
}

textArea = document.getElementById("text-box");

// document.getElementById("one").addEventListener("click", () => {
//     document.getElementById("text-box").setAttribute('value', '1');
//     textArea.value = textArea.value + "1";
// });

const btnOne = document.getElementById("one").addEventListener("click", () => {
    textArea.value = textArea.value + '1';
});

const btnTwo = document.getElementById("two").addEventListener("click", () => {
    textArea.value = textArea.value + '2';
});

const btnThree = document.getElementById("three").addEventListener("click", () => {
    textArea.value = textArea.value + '3';
});

const btnFour = document.getElementById("four").addEventListener("click", () => {
    textArea.value = textArea.value + '4';
});

const btnFive = document.getElementById("five").addEventListener("click", () => {
    textArea.value = textArea.value + '5';
});

const btnSix = document.getElementById("six").addEventListener("click", () => {
    textArea.value = textArea.value + '6';
});

const btnSeven = document.getElementById("seven").addEventListener("click", () => {
    textArea.value = textArea.value + '7';
});

const btnEight = document.getElementById("eight").addEventListener("click", () => {
    textArea.value = textArea.value + '8';
});

const btnNine = document.getElementById("nine").addEventListener("click", () => {
    textArea.value = textArea.value + '9';
});

const btnZero = document.getElementById("zero").addEventListener("click", () => {
    textArea.value = textArea.value + '0';
});

const btnClear = document.getElementById("clear").addEventListener("click", () => {
    textArea.value = '';
});


console.log(operate(num1, operator, num2));

