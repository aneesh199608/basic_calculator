//Select necessary elements from DOM
//SET operationDisplay to reference '.operation' div
const display = document.querySelector(".operation");
const buttons = document.querySelectorAll("button");

//Initialize variables
//SET currentOperation as an empty string
let currentOperation = "";
let operator = null;
let result = null;

//Function to perform calculations
function add(a,b) { return a+b; }
function subtract(a,b) { return a-b; }
function multiply(a,b) { return a*b; }
function divide(a,b) { return b===0 ? "BAZINGA": a/b; }

//Define function calculateResult(expression)
//parse 'expression' into numbers and operators
//compute result following correct math operations
//return result
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

function handleButtonClick(value) {
    if (!isNaN(value)) {  // If it's a number
        if (result !== null && !operator) {  // If a result exists and no operator selected
            currentOperation = value;  // Start fresh
            result = null;  // Reset result
        } else {
            currentOperation += value;  // Append to current operation
        }
    } 
    else if (["+", "-", "*", "/"].includes(value)) {  // If it's an operator
        if (!currentOperation) return;  // Ignore if no number entered yet
        
        if (operator) {
            result = calculateExpression();  // Compute previous operation
            currentOperation = result;  // Store result
        }
        currentOperation += ` ${value} `;  // Ensure correct spacing
        operator = value;
        result = null;  // Reset result to allow showing ongoing operation
    } 
    else if (value === "=") {  // If "=" is pressed
        if (!operator) return;
        result = calculateExpression();
        currentOperation = result;
        operator = null;
    } 
    else if (value === "AC") {  // Reset everything
        currentOperation = "";
        operator = null;
        result = null;
    }

    updateDisplay();
}

function calculateExpression() {
    let parts = currentOperation.split(" ").filter(part => part !== "");
    if (parts.length < 3) return currentOperation;

    let num1 = parts[0];
    let op = parts[1];
    let num2 = parts[2];

    let computedResult = operate(num1, num2, op);
    return computedResult.toString();
}

function updateDisplay() {
    display.textContent = currentOperation || "0";
}

//Add Event Listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.id))
});

//If division by zero happens
//Display 'BAZINGA'