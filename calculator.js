// DOM element references
const display = document.querySelector(".operation");
const buttons = document.querySelectorAll("button");

// State variables
let currentOperation = "";
let operator = null;
let result = null;

// Basic arithmetic operations
function add(a,b) { return a+b; }
function subtract(a,b) { return a-b; }
function multiply(a,b) { return a*b; }
function divide(a,b) { return b===0 ? "BAZINGA": a/b; }

// Performs calculation based on operator and two numbers
function operate(num1, num2, op) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch(op) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        default: return num2;
    }
}

// Handles all button click events and updates calculator state
function handleButtonClick(value) {
    if (!isNaN(value)) {
        if (result !== null && !operator) {
            currentOperation = value;
            result = null;
        } else {
            currentOperation += value;
        }
    } 
    else if (["+", "-", "*", "/"].includes(value)) {
        if (!currentOperation) return;
        
        if (operator) {
            result = calculateExpression();
            currentOperation = result;
        }
        currentOperation += ` ${value} `;
        operator = value;
        result = null;
    } 
    else if (value === "=") {
        if (!operator) return;
        result = calculateExpression();
        currentOperation = result;
        operator = null;
    } 
    else if (value === "AC") {
        currentOperation = "";
        operator = null;
        result = null;
    }

    updateDisplay();
}

// Calculates the result of the current expression
function calculateExpression() {
    let parts = currentOperation.split(" ").filter(part => part !== "");
    if (parts.length < 3) return currentOperation;

    let num1 = parts[0];
    let op = parts[1];
    let num2 = parts[2];

    let computedResult = operate(num1, num2, op);
    return computedResult.toString();
}

// Updates the display with current operation or 0
function updateDisplay() {
    display.textContent = currentOperation || "0";
}

// Add click event listeners to all calculator buttons
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.id))
});