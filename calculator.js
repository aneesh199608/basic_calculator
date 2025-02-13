//Select necessary elements from DOM
//SET operationDisplay to reference '.operation' div
//SET resultDisplay to reference '.result' div
//SET allButtons to reference all button elements
const operationDisplay = document.querySelector(".operation");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

//Initialize variables
//SET currentOperation as an empty string
let currentOperation = "";
//SET currentResult as an empty string
let currentResult = "";
let operator = null;
let result = nunll;

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


// FOR each button
//     IF button is a number (0-9):
//     Append its value to 'currentOperation'
//     Update 'operationDisplay'

//     ELSE IF button is a operation (+, -, *, /):
//         IF currentOperation is empty
//         Then do nothing

//         ELSE IF current operation is operator
//         Replace with new operator

//         ELSE
//         Append operator to 'currentOperation'
//     Update 'operationDisplay'

//     ELSE IF button is '='
//     Append its value to 'currentResult'
//     Update 'resultDisplay'

//     ELSE IF button is 'AC'
//     SET 'currentOperation' and 'currentDisplay' to empty string
//     Clear the result and operation displays
function handleButtonClick(value) {
    if (!isNan(value)) {
        currentOperation += value;
    }
    else if(["+", "-", "*", "/"].includes(value)){
        if(!currentOperation) return;
        if(operator) {
            currentOperation = calculateExpression();
        }
        currentOperation+= ` ${value}`;
        operator = value;
    }
    else if (value === "=") {
        if(!operator) return;
        currentOperation = calculateExpression();
        operator = null;
    }
    else if (value === "AC") {
        currentOperation = "";
        operator = null;
        result = null;
    }
    updateDisplay();
}

function calculateExpression() {
    let parts = currentOperation.split(" ");
    if (parts.length < 3) return currentOperation;

    let num1 = parts[0];
    let op = parts[1];
    let num2 = parts[2];

    let computedResult = operate(num1, num2, op);
    return computedResult.toString();
}

function updateDisplay() {
    operationDisplay.textContent = currentOperation;
    resultDisplay.textContent = result !== null ? result:0;
}

//Add Event Listeners to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.id))
});

//If division by zero happens
//Display 'BAZINGA'