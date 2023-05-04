let firstNumber = null;
let secondNumber = null;
let operation = null;
let shouldReset = false;

const numberDisplay = document.querySelector('.number-display');

const operationDisplay = document.querySelector('.operation-display');

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) =>
  numberButton.addEventListener('click', (e) =>
    appendNumber(numberButton.textContent)
  )
);

const operationButtons = document.querySelectorAll('.operation-button');
operationButtons.forEach((operationButton) =>
  operationButton.addEventListener('click', (e) =>
    handleOperationButton(operationButton.textContent)
  )
);

const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener('click', evaluate);

function appendNumber(number) {
  if (numberDisplay.textContent === '0' || shouldReset) {
    numberDisplay.textContent = '';
    shouldReset = false;
  }
  numberDisplay.textContent += number;
}

function handleOperationButton(operator) {
  operation = operator;
  firstNumber = Number(numberDisplay.textContent);
  numberDisplay.textContent = '';
  operationDisplay.textContent = `${firstNumber} ${operation}`;
  shouldReset = true;
}

function evaluate() {
  if (!operation) return;
  if (firstNumber) secondNumber = Number(numberDisplay.textContent);
  const result = operate(operation, firstNumber, secondNumber);
  numberDisplay.textContent = result;
  operationDisplay.textContent += ' ' + secondNumber;
  operator = null;
  firstNumber = result;
  secondNumber = null;
  console.log(result);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
  if (operator === '+') return add(num1, num2);
  if (operator === '-') return subtract(num1, num2);
  if (operator === 'x') return multiply(num1, num2);
  if (operator === '/') return divide(num1, num2);
}
