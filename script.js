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

console.log(operate(num1, operator, num2));

