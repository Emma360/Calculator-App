const number1 = parseFloat(prompt("Enter First Number: "));

const operator = prompt("Enter Operator");

const number2 = parseFloat(prompt("Enter Second Number: "));


let result;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;

} else if (operator == '/') {
    result = number1 / number2;
} else {
    window.alert("Invalid Operator!")
}


window.alert("Result is " + result);

