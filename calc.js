const num1 = parseFloat(prompt("Enter number1: "));
const operator = prompt("Enter operator: ");
const num2 = parseFloat(prompt("Enter number2: "));



function add() {
    if (operator == '+') {
         window.alert(num1 + num2);
    } 
}
add();

function subtract() {
    if (operator == '-') {
         window.alert(num1 - num2);
    }
}
subtract();

function multiply() {
    if (operator == '*') {
         window.alert(num1 * num2);
    }
}
multiply();

function divide() {
    if (operator == '/') {
         window.alert(num1 / num2);
    } 
}
divide();


