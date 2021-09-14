let result;
 
const num1 = parseFloat(prompt("Enter Number1: "));
// take operator input
const operator = prompt("Enter  Operator: ");
const num2 = parseFloat(prompt("Enter Number2: "));

switch(operator) {
    case '+':
        result = num1 + num2;
        window.alert(`${num1} + ${num2} = ${result}`);
        break;
    case '-':
        result = num1 - num2;
        window.alert(`${num1} - ${num2} = ${result}`);
        break;
    case '*':
        result = num1 * num2;
        window.alert(`${num1} * ${num2} = ${result}`);
        break;
    case '/':
        result = num1 / num2;
        window.alert(`${num1} / ${num2} = ${result}`);
        break;
    default: 
        window.alert("Invalid Operator");
        break;
}