//Select necessary elements from DOM
//SET operationDisplay to reference '.operation' div
//SET resultDisplay to reference '.result' div
//SET allButtons to reference all button elements

//Initialize variables
//SET currentOperation as an empty string
//SET currentResult as an empty string

//Add Event Listeners to all buttons
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

//If division by zero happens
//Display 'BAZINGA'