const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber = null;
let secondNumber = null;
let operator = null;

const operate = (op, a, b) => {
  if(op === "+") return add(a, b);
  if(op === "-") return subtract(a, b);
  if(op === "*") return multiply(a, b);
  if(op === "/") return divide(a, b);
}